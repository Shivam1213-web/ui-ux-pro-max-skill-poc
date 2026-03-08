"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";
import { PaymentsTable } from "@/components/payments/PaymentsTable";
import { payments } from "@/lib/mockData";

export default function PaymentsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Payments"
        description="Send, schedule, and track outgoing payments"
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5m0-13.5L21 9m-9 4.5h9"
              />
            </svg>
            Send Payment
          </button>
        }
      />

      <PaymentsTable payments={payments} onRowClick={() => {}} />
    </DashboardLayout>
  );
}
