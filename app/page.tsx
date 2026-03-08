"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { KPIGrid } from "@/components/dashboard/KPIGrid";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { CashflowTrendChart } from "@/components/dashboard/CashflowTrendChart";
import { RevenueVsExpensesChart } from "@/components/dashboard/RevenueVsExpensesChart";
import { AIInsightsWidget } from "@/components/ai/AIInsightsWidget";
import {
  dashboardKpiCardsData,
  recentTransactions,
  dashboardFinancialInsights,
  cashflowTrendData,
  revenueVsExpensesData,
} from "@/lib/mockData";
import type { KPICardProps } from "@/components/dashboard/KPICard";

const dashboardKpiIcons: Record<string, KPICardProps["icon"]> = {
  wallet: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  arrowDown: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
  ),
  arrowUp: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L12 16.5m4.5 4.5V7.5" />
    </svg>
  ),
  trend: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0111.814 2.086c-.776.248-1.59.401-2.466.401a12.04 12.04 0 01-8.662-3.67L2.25 18z" />
    </svg>
  ),
};

const dashboardKpiCards: KPICardProps[] = dashboardKpiCardsData.map(
  ({ iconKey, sparklineData, ...rest }) => ({
    ...rest,
    icon: iconKey ? dashboardKpiIcons[iconKey] : undefined,
    sparklineData,
  })
);

export default function DashboardPage() {
  return (
    <DashboardLayout header={<Header />}>
      <div className="space-y-10">
        {/* KPI Cards with sparklines and trend indicators */}
        <section aria-labelledby="kpi-heading">
          <h2 id="kpi-heading" className="sr-only">
            Key metrics
          </h2>
          <KPIGrid cards={dashboardKpiCards} columns={4} />
        </section>

        {/* Analytics: Cashflow trend + Revenue vs expenses */}
        <section aria-label="Analytics charts" className="grid gap-6 lg:grid-cols-2">
          <CashflowTrendChart data={cashflowTrendData} />
          <RevenueVsExpensesChart data={revenueVsExpensesData} />
        </section>

        {/* Recent Transactions + AI Insights */}
        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2" aria-labelledby="transactions-heading">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="transactions-heading" className="heading-section">
                Recent Transactions
              </h2>
              <Link
                href="/transactions"
                className="cursor-pointer text-sm font-medium text-[var(--primary)] transition-all duration-300 hover:opacity-90 hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                View all →
              </Link>
            </div>
            <TransactionTable transactions={recentTransactions} maxRows={6} />
          </section>

          <section aria-label="AI financial insights">
            <AIInsightsWidget
              insights={dashboardFinancialInsights}
              title="AI Insights"
            />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
