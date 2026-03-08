"use client";

export interface CategorySpend {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

interface SpendByCategoryProps {
  title?: string;
  data: CategorySpend[];
  currency?: string;
}

const defaultColors = [
  "var(--primary)",
  "var(--accent)",
  "var(--warning)",
  "var(--success)",
  "var(--danger)",
];

export function SpendByCategory({
  title = "Spend by category",
  data,
  currency = "USD",
}: SpendByCategoryProps) {
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5">
      <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-0.5 text-sm text-[var(--muted)]">
        Total:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(total)}
      </p>
      <div className="mt-4 space-y-3">
        {data.map((item, i) => (
          <div key={item.category} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-[var(--foreground)]">
                {item.category}
              </span>
              <span className="text-[var(--muted)]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency,
                  minimumFractionDigits: 0,
                }).format(item.amount)}{" "}
                ({item.percentage}%)
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[var(--muted-bg)]">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color || defaultColors[i % defaultColors.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
