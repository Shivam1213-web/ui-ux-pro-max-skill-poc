"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { recentTransactions } from "@/lib/mockData";

export default function TransactionsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Transactions"
        description="View and search all transactions"
        actions={
          <button
            type="button"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Export
          </button>
        }
      />
      <TransactionTable transactions={recentTransactions} />
    </DashboardLayout>
  );
}
