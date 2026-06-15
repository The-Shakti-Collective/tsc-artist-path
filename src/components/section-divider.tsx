export function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-2" aria-hidden>
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs tracking-[0.35em] text-muted-foreground">⸻</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
