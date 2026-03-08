"use client";

import { ReactNode } from "react";

export interface AccountCardProps {
  /** Bank logo: image element or fallback (e.g. initial) */
  bankLogo: ReactNode;
  accountName: string;
  maskedAccountNumber: string;
  currentBalance: number;
  currency: string;
  lastSyncTime: string;
  /** Optional click handler */
  onClick?: () => void;
}

function formatBalance(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatLastSync(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function AccountCard({
  bankLogo,
  accountName,
  maskedAccountNumber,
  currentBalance,
  currency,
  lastSyncTime,
  onClick,
}: AccountCardProps) {
  const isClickable = typeof onClick === "function";

  return (
    <article
      role={isClickable ? "button" : undefined}
      onClick={onClick}
      className={`card-premium group relative overflow-hidden ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Subtle gradient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            {/* Bank logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-elevated)] shadow-md transition-all duration-300 ease-out group-hover:scale-105">
              {bankLogo}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-semibold text-[var(--foreground)]">
                {accountName}
              </h3>
              <p className="mt-0.5 font-mono text-sm text-[var(--muted)]">
                {maskedAccountNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-[var(--card-border)] pt-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Balance
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-[var(--foreground)] tabular-nums">
              {formatBalance(currentBalance, currency)}
            </p>
          </div>
          <p className="shrink-0 text-right text-xs text-[var(--muted)]">
            Synced {formatLastSync(lastSyncTime)}
          </p>
        </div>
      </div>
    </article>
  );
}
