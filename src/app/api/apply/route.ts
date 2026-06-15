import { NextResponse } from 'next/server';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const ApplySchema = z.object({
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(8).max(32),
  city: z.string().trim().max(200).optional().or(z.literal('')),
  stageName: z.string().trim().max(200).optional().or(z.literal('')),
  instagram: z.string().trim().max(500).optional().or(z.literal('')),
  spotify: z.string().trim().max(500).optional().or(z.literal('')),
  youtube: z.string().trim().max(500).optional().or(z.literal('')),
  artistIdentity: z.string().trim().max(4000).optional().or(z.literal('')),
  trainingDetails: z.string().trim().max(4000).optional().or(z.literal('')),
  coreSkills: z.string().trim().max(4000).optional().or(z.literal('')),
  strengthsUniqueness: z.string().trim().max(4000).optional().or(z.literal('')),
  dailyTime: z.string().trim().max(500).optional().or(z.literal('')),
  mentorName: z.string().trim().max(500).optional().or(z.literal('')),
  songsReleased: z.string().trim().max(500).optional().or(z.literal('')),
  showsPerformed: z.string().trim().max(500).optional().or(z.literal('')),
  currentFans: z.string().trim().max(500).optional().or(z.literal('')),
  currentSetup: z.string().trim().max(4000).optional().or(z.literal('')),
  currentlyWorkingOn: z.string().trim().max(4000).optional().or(z.literal('')),
  dailyRituals: z.string().trim().max(4000).optional().or(z.literal('')),
  learningNeeds: z.string().trim().max(4000).optional().or(z.literal('')),
  mentorshipNeeds: z.string().trim().max(4000).optional().or(z.literal('')),
  curationNeeds: z.string().trim().max(4000).optional().or(z.literal('')),
  fandomNeeds: z.string().trim().max(4000).optional().or(z.literal('')),
  aspirationalGoal: z.string().trim().max(4000).optional().or(z.literal('')),
  anythingElse: z.string().trim().max(4000).optional().or(z.literal('')),
});

function resolvePlatformApiUrl(): string | null {
  const raw = process.env.TSC_API_URL?.trim() ?? process.env.NEXT_PUBLIC_TSC_API_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, '');
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = ApplySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Validation failed', detail: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const apiBase = resolvePlatformApiUrl();
  const secret = process.env.ARTIST_PATH_WEBHOOK_SECRET?.trim();
  if (!apiBase || !secret) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Application pipeline not configured (TSC_API_URL, ARTIST_PATH_WEBHOOK_SECRET).',
      },
      { status: 503 },
    );
  }

  const response = await fetch(`${apiBase}/public/artist-path/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Artist-Path-Secret': secret,
    },
    body: JSON.stringify({
      ...parsed.data,
      source: 'theartistpath.in',
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return NextResponse.json(
      { ok: false, error: 'Submission failed', detail: text || response.statusText },
      { status: response.status },
    );
  }

  const payload = (await response.json()) as { id?: string };
  return NextResponse.json({ ok: true, applicationId: payload.id ?? 'unknown' });
}
