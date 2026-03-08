"use client";

interface CashflowChartPlaceholderProps {
  title?: string;
}

export function CashflowChartPlaceholder({
  title = "Cashflow",
}: CashflowChartPlaceholderProps) {
  return (
    <div className="card-premium flex flex-col p-6">
      <div className="flex items-center gap-2">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
          style={{
            background: "var(--gradient-accent)",
            boxShadow: "0 4px 14px -2px rgba(99, 102, 241, 0.4)",
          }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            {title}
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Monthly inflow vs outflow
          </p>
        </div>
      </div>
      <div className="mt-6 flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-[var(--card-border)] bg-[var(--muted-bg)] transition-colors duration-300 hover:border-[var(--primary)]/40 hover:bg-[var(--muted-bg)]">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-[var(--muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
          <p className="mt-3 text-sm font-medium text-[var(--muted)]">
            Chart placeholder
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Connect your data to visualize cashflow
          </p>
        </div>
      </div>
    </div>
  );
}
