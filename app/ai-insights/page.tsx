"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AIInsightsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader title="AI Insights" description="AI-powered financial insights" />
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
        AI Insights coming soon.
      </div>
    </DashboardLayout>
  );
}
