"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";

export default function CardsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Cards"
        description="Manage company cards and limits"
        actions={
          <button
            type="button"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Order card
          </button>
        }
      />
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
        Card management coming soon.
      </div>
    </DashboardLayout>
  );
}
