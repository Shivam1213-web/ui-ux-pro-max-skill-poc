"use client";

export type PaymentStatus = "completed" | "pending" | "processing" | "failed";

export interface Payment {
  id: string;
  beneficiary: string;
  bank: string;
  amount: number;
  currency: string;
  date: string; // ISO
  status: PaymentStatus;
}

interface PaymentsTableProps {
  payments: Payment[];
  onRowClick?: (payment: Payment) => void;
}

const statusConfig: Record<PaymentStatus, string> = {
  completed: "bg-[var(--success-muted)] text-[var(--success)]",
  pending: "bg-[var(--warning-muted)] text-[var(--warning)]",
  processing: "bg-[var(--primary-muted)] text-[var(--primary)]",
  failed: "bg-[var(--danger-muted)] text-[var(--danger)]",
};

function formatAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function StatusBadge({ status }: { status: PaymentStatus }) {
  const className = statusConfig[status];
  const label =
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${className}`}
    >
      {label}
    </span>
  );
}

export function PaymentsTable({
  payments,
  onRowClick,
}: PaymentsTableProps) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--card-border)] bg-[var(--muted-bg)]/50">
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Beneficiary
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Bank
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Amount
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Date
              </th>
              <th className="px-6 py-4 font-medium text-[var(--muted)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                onClick={() => onRowClick?.(payment)}
                className={`group border-b border-[var(--card-border)] last:border-0 transition-colors duration-200 ${
                  onRowClick
                    ? "cursor-pointer hover:bg-[var(--muted-bg)]/40"
                    : ""
                }`}
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-[var(--foreground)]">
                    {payment.beneficiary}
                  </p>
                </td>
                <td className="px-6 py-4 text-[var(--muted)]">
                  {payment.bank}
                </td>
                <td className="px-6 py-4 font-semibold tabular-nums text-[var(--foreground)]">
                  {formatAmount(payment.amount, payment.currency)}
                </td>
                <td className="px-6 py-4 text-[var(--muted)]">
                  {formatDate(payment.date)}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={payment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
