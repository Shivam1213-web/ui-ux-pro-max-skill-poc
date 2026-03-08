"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";

export default function TeamPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Team"
        description="Manage team members and permissions"
      />
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
        Team management coming soon.
      </div>
    </DashboardLayout>
  );
}
