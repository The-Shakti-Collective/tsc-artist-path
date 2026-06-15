'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/config';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  stageName: string;
  instagram: string;
  spotify: string;
  youtube: string;
  artistIdentity: string;
  trainingDetails: string;
  coreSkills: string;
  strengthsUniqueness: string;
  dailyTime: string;
  mentorName: string;
  songsReleased: string;
  showsPerformed: string;
  currentFans: string;
  currentSetup: string;
  currentlyWorkingOn: string;
  dailyRituals: string;
  learningNeeds: string;
  mentorshipNeeds: string;
  curationNeeds: string;
  fandomNeeds: string;
  aspirationalGoal: string;
  anythingElse: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  stageName: '',
  instagram: '',
  spotify: '',
  youtube: '',
  artistIdentity: '',
  trainingDetails: '',
  coreSkills: '',
  strengthsUniqueness: '',
  dailyTime: '',
  mentorName: '',
  songsReleased: '',
  showsPerformed: '',
  currentFans: '',
  currentSetup: '',
  currentlyWorkingOn: '',
  dailyRituals: '',
  learningNeeds: '',
  mentorshipNeeds: '',
  curationNeeds: '',
  fandomNeeds: '',
  aspirationalGoal: '',
  anythingElse: '',
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  'w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';

export function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || 'Application failed. Please try again.');
      }
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Application failed.');
    }
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-6 font-display text-3xl font-semibold">Application received</h1>
        <p className="mt-3 text-muted-foreground">
          Thank you for applying to The Artist Path. Our team will review your submission and reach out if you are
          shortlisted.
        </p>
        <Link href="/" className="mt-8 inline-flex text-sm text-primary hover:underline">
          Back to program overview
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>
      <div className="mt-6 space-y-2">
        <h1 className="font-display text-3xl font-semibold">Apply to The Artist Path</h1>
        <p className="text-muted-foreground">
          Applications open — 30 artists selected. Share your music journey and original work.
        </p>
      </div>

      <form onSubmit={submit} className="mt-10 space-y-8">
        <section className="space-y-4 rounded-xl border border-border bg-card/40 p-6">
          <h2 className="font-display text-xl font-semibold">Identity</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full name" required>
              <input className={inputClass} value={form.fullName} onChange={(e) => update('fullName', e.target.value)} required />
            </Field>
            <Field label="Stage name">
              <input className={inputClass} value={form.stageName} onChange={(e) => update('stageName', e.target.value)} />
            </Field>
            <Field label="Email" required>
              <input type="email" className={inputClass} value={form.email} onChange={(e) => update('email', e.target.value)} required />
            </Field>
            <Field label="Mobile" required>
              <input className={inputClass} value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
            </Field>
            <Field label="City">
              <input className={inputClass} value={form.city} onChange={(e) => update('city', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card/40 p-6">
          <h2 className="font-display text-xl font-semibold">Links</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Field label="Instagram">
              <input className={inputClass} value={form.instagram} onChange={(e) => update('instagram', e.target.value)} />
            </Field>
            <Field label="Spotify">
              <input className={inputClass} value={form.spotify} onChange={(e) => update('spotify', e.target.value)} />
            </Field>
            <Field label="YouTube">
              <input className={inputClass} value={form.youtube} onChange={(e) => update('youtube', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card/40 p-6">
          <h2 className="font-display text-xl font-semibold">Your music journey</h2>
          <div className="space-y-4">
            {(
              [
                ['artistIdentity', 'How do you describe yourself as an artist?'],
                ['trainingDetails', 'Training and background'],
                ['coreSkills', 'Core skills'],
                ['strengthsUniqueness', 'Strengths and uniqueness'],
                ['dailyTime', 'Daily time dedicated to music'],
                ['mentorName', 'Mentor or guide (if any)'],
                ['songsReleased', 'Songs released so far'],
                ['showsPerformed', 'Live shows performed'],
                ['currentFans', 'Current audience / fan base'],
                ['currentSetup', 'Current creative setup'],
                ['currentlyWorkingOn', 'What are you working on now?'],
                ['dailyRituals', 'Daily creative rituals'],
                ['learningNeeds', 'What do you want to learn?'],
                ['mentorshipNeeds', 'Mentorship needs'],
                ['curationNeeds', 'Curation needs'],
                ['fandomNeeds', 'Audience / fandom needs'],
                ['aspirationalGoal', 'Aspirational goal for this program'],
                ['anythingElse', 'Anything else we should know'],
              ] as const
            ).map(([key, label]) => (
              <Field key={key} label={label}>
                <textarea
                  className={`${inputClass} min-h-[88px]`}
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                />
              </Field>
            ))}
          </div>
        </section>

        {error ? <p className="text-sm text-red-400">{error}</p> : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit application'}
        </button>
      </form>

      <p className="mt-6 text-xs text-muted-foreground">
        By applying you agree to be contacted by {siteConfig.tscWebsiteUrl.replace('https://', '')} about this program.
      </p>
    </div>
  );
}
