"use client";

export interface TreasuryInsightCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend: "up" | "down" | "neutral";
  change: string;
}

const trendConfig = {
  up: { color: "text-[var(--success)]", icon: "M5 10l7-7m0 0l7 7m-7-7v18" },
  down: { color: "text-[var(--danger)]", icon: "M19 14l-7 7m0 0l-7-7m7 7V3" },
  neutral: { color: "text-[var(--muted)]", icon: "M5 12h14" },
};

export function TreasuryInsightCard({
  title,
  value,
  subtitle,
  trend,
  change,
}: TreasuryInsightCardProps) {
  const config = trendConfig[trend];

  return (
    <div className="card-premium group relative overflow-hidden p-5">
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-[var(--radius-2xl)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div className="relative z-10">
        <p className="body-muted text-xs font-medium uppercase tracking-wider">
          {title}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {value}
        </p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-[var(--muted)]">{subtitle}</p>
        )}
        <p className={`mt-3 flex items-center gap-1.5 text-sm font-medium ${config.color}`}>
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
          </svg>
          {change}
        </p>
      </div>
    </div>
  );
}
