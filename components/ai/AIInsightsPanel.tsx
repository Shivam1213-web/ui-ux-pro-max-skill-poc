"use client";

export interface Insight {
  id: string;
  type: "saving" | "alert" | "recommendation" | "anomaly";
  title: string;
  description: string;
  actionLabel?: string;
  impact?: string;
}

interface AIInsightsPanelProps {
  insights: Insight[];
  title?: string;
  onAction?: (insight: Insight) => void;
}

const typeConfig = {
  saving: {
    icon: "💰",
    bg: "bg-[var(--success-muted)]",
    border: "border-[var(--success)]/20",
  },
  alert: {
    icon: "⚠️",
    bg: "bg-[var(--warning-muted)]",
    border: "border-[var(--warning)]/20",
  },
  recommendation: {
    icon: "✨",
    bg: "bg-[var(--primary-muted)]",
    border: "border-[var(--primary)]/20",
  },
  anomaly: {
    icon: "📊",
    bg: "bg-[var(--accent-muted)]",
    border: "border-[var(--accent)]/20",
  },
};

export function AIInsightsPanel({
  insights,
  title = "AI Insights",
  onAction,
}: AIInsightsPanelProps) {
  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </span>
        <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      <div className="space-y-3">
        {insights.map((insight) => {
          const config = typeConfig[insight.type];
          return (
            <div
              key={insight.id}
              className={`rounded-lg border p-3 ${config.bg} ${config.border}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">{config.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[var(--foreground)]">
                    {insight.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {insight.description}
                  </p>
                  {insight.impact && (
                    <p className="mt-1 text-xs font-medium text-[var(--primary)]">
                      {insight.impact}
                    </p>
                  )}
                  {insight.actionLabel && (
                    <button
                      type="button"
                      onClick={() => onAction?.(insight)}
                      className="mt-2 text-sm font-medium text-[var(--primary)] hover:underline"
                    >
                      {insight.actionLabel} →
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
