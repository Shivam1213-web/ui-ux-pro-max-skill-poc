"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";

export default function SettingsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Settings"
        description="Account and preferences"
      />
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
        Settings coming soon.
      </div>
    </DashboardLayout>
  );
}
