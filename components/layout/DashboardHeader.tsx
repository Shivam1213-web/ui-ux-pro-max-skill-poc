"use client";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-[var(--card-border)] bg-[var(--card)]/80 px-6 backdrop-blur-sm lg:px-8">
      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--muted)]">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted-bg)]"
        >
          Export
        </button>
        <button
          type="button"
          className="rounded-lg bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        >
          New payment
        </button>
      </div>
    </header>
  );
}
