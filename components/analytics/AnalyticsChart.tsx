"use client";

export interface ChartDataPoint {
  label: string;
  value: number;
  previousValue?: number;
}

interface AnalyticsChartProps {
  title: string;
  subtitle?: string;
  data: ChartDataPoint[];
  currency?: string;
  height?: number;
}

function formatCompact(value: number, currency?: string): string {
  if (currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  }
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return String(value);
}

export function AnalyticsChart({
  title,
  subtitle,
  data,
  currency = "USD",
  height = 200,
}: AnalyticsChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5">
      <div className="mb-4">
        <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-sm text-[var(--muted)]">{subtitle}</p>
        )}
      </div>
      <div
        className="flex items-end gap-2"
        style={{ height: `${height}px` }}
      >
        {data.map((point, i) => {
          const pct = (point.value / maxValue) * 100;
          return (
            <div
              key={point.label}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div
                className="w-full rounded-t-md bg-[var(--primary)]/20 transition-all hover:bg-[var(--primary)]/30"
                style={{ height: `${Math.max(pct, 4)}%` }}
                title={`${point.label}: ${formatCompact(point.value, currency)}`}
              />
              <span className="text-xs font-medium text-[var(--muted)]">
                {point.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex justify-between border-t border-[var(--card-border)] pt-3 text-xs text-[var(--muted)]">
        <span>Min: {formatCompact(Math.min(...data.map((d) => d.value)), currency)}</span>
        <span>Max: {formatCompact(maxValue, currency)}</span>
      </div>
    </div>
  );
}
