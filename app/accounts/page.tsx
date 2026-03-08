"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccountCard, BankLogoFallback } from "@/components/accounts";
import { connectedAccounts } from "@/lib/mockData";

export default function AccountsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Accounts"
        description="Connected bank accounts and balances"
        actions={
          <button
            type="button"
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 4px 16px -2px rgba(45, 212, 191, 0.35)",
            }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Connect Bank Account
          </button>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {connectedAccounts.map((account) => (
          <AccountCard
            key={account.id}
            bankLogo={<BankLogoFallback name={account.bankName} />}
            accountName={account.accountName}
            maskedAccountNumber={account.maskedAccountNumber}
            currentBalance={account.currentBalance}
            currency={account.currency}
            lastSyncTime={account.lastSyncTime}
            onClick={() => {}}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
