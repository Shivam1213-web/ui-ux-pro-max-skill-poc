"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ReportsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Reports"
        description="Analytics and custom reports"
      />
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
        Reports coming soon.
      </div>
    </DashboardLayout>
  );
}
