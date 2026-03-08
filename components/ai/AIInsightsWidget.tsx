"use client";

export type FinancialInsightVariant = "expense_up" | "overdue" | "prediction";

export interface FinancialInsight {
  id: string;
  variant: FinancialInsightVariant;
  title: string;
  description: string;
  actionLabel?: string;
}

interface AIInsightsWidgetProps {
  insights: FinancialInsight[];
  title?: string;
  onAction?: (insight: FinancialInsight) => void;
}

const variantConfig: Record<
  FinancialInsightVariant,
  {
    icon: React.ReactNode;
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  expense_up: {
    bg: "bg-[var(--warning-muted)]",
    border: "border-[var(--warning)]/30",
    iconBg: "bg-[var(--warning)]",
    iconColor: "text-white",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0111.814 2.086c-.776.248-1.59.401-2.466.401a12.04 12.04 0 01-8.662-3.67L2.25 18z" />
      </svg>
    ),
  },
  overdue: {
    bg: "bg-[var(--danger-muted)]",
    border: "border-[var(--danger)]/30",
    iconBg: "bg-[var(--danger)]",
    iconColor: "text-white",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  prediction: {
    bg: "bg-[var(--primary-muted)]",
    border: "border-[var(--primary)]/30",
    iconBg: "bg-[var(--primary)]",
    iconColor: "text-white",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
};

export function AIInsightsWidget({
  insights,
  title = "AI Insights",
  onAction,
}: AIInsightsWidgetProps) {
  return (
    <div className="card-premium p-5">
      <div className="mb-4 flex items-center gap-2">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
          style={{
            background: "var(--gradient-accent)",
            boxShadow: "0 4px 14px -2px rgba(99, 102, 241, 0.4)",
          }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </span>
        <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      <div className="space-y-3">
        {insights.map((insight) => {
          const config = variantConfig[insight.variant];
          return (
            <div
              key={insight.id}
              className={`rounded-xl border p-4 transition-colors duration-200 hover:opacity-95 ${config.bg} ${config.border}`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${config.iconBg} ${config.iconColor}`}
                >
                  {config.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--foreground)]">
                    {insight.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {insight.description}
                  </p>
                  {insight.actionLabel && (
                    <button
                      type="button"
                      onClick={() => onAction?.(insight)}
                      className="mt-2 text-sm font-medium text-[var(--primary)] transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
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
