"use client";

import { CategoryIcon } from "@/components/ui/CategoryIcon";

export interface Transaction {
  id: string;
  description: string;
  merchant?: string;
  amount: number;
  currency: string;
  date: string;
  category: string;
  type: "inbound" | "outbound";
  status?: "pending" | "completed" | "failed";
}

export interface TransactionTableProps {
  transactions: Transaction[];
  maxRows?: number;
  onRowClick?: (tx: Transaction) => void;
}

const categoryColors: Record<string, string> = {
  Software: "bg-[var(--accent-muted)] text-[var(--accent)]",
  Travel: "bg-[var(--primary-muted)] text-[var(--primary)]",
  Office: "bg-[var(--warning-muted)] text-[var(--warning)]",
  Marketing: "bg-[var(--danger-muted)] text-[var(--danger)]",
  Other: "bg-[var(--muted-bg)] text-[var(--muted)]",
};

const statusConfig: Record<string, { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "bg-[var(--success-muted)] text-[var(--success)]",
  },
  pending: {
    label: "Pending",
    className: "bg-[var(--warning-muted)] text-[var(--warning)]",
  },
  failed: {
    label: "Failed",
    className: "bg-[var(--danger-muted)] text-[var(--danger)]",
  },
};

function formatAmount(amount: number, currency: string, type: Transaction["type"]) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(Math.abs(amount));
  return type === "outbound" ? `-${formatted}` : formatted;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function StatusBadge({ status }: { status?: string }) {
  const config = statusConfig[status ?? "completed"] ?? statusConfig.completed;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}

export function TransactionTable({
  transactions,
  maxRows = 8,
  onRowClick,
}: TransactionTableProps) {
  const displayTx = transactions.slice(0, maxRows);

  return (
    <div className="card-premium overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--card-border)] bg-[var(--muted-bg)]/50">
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Description
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Category
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">Date</th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Status
              </th>
              <th className="px-6 py-4 text-right font-medium text-[var(--muted)]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {displayTx.map((tx) => (
              <tr
                key={tx.id}
                onClick={() => onRowClick?.(tx)}
                className="group cursor-pointer border-b border-[var(--card-border)] last:border-0 transition-colors duration-200 hover:bg-[var(--muted-bg)]/60"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      {tx.merchant || tx.description}
                    </p>
                    {tx.merchant && (
                      <p className="text-xs text-[var(--muted)]">
                        {tx.description}
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                      categoryColors[tx.category] ?? categoryColors.Other
                    }`}
                  >
                    <CategoryIcon category={tx.category} />
                    {tx.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-[var(--muted)]">
                  {formatDate(tx.date)}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={tx.status} />
                </td>
                <td
                  className={`px-6 py-4 text-right font-semibold tabular-nums ${
                    tx.type === "inbound"
                      ? "text-[var(--success)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {formatAmount(tx.amount, tx.currency, tx.type)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
