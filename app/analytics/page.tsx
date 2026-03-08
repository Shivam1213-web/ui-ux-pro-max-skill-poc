"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";
import { CashflowForecastChart } from "@/components/analytics/CashflowForecastChart";
import { AccountBalanceDistributionChart } from "@/components/analytics/AccountBalanceDistributionChart";
import { MonthlyExpenseBreakdownChart } from "@/components/analytics/MonthlyExpenseBreakdownChart";
import { TreasuryInsightCard } from "@/components/analytics/TreasuryInsightCard";
import {
  cashflowForecastData,
  accountBalanceDistributionData,
  monthlyExpenseBreakdownData,
  treasuryInsightCardsData,
} from "@/lib/mockData";

export default function AnalyticsPage() {
  return (
    <DashboardLayout header={<Header />}>
      <PageHeader
        title="Treasury Analytics"
        description="Cashflow forecast, balance distribution, and expense insights"
      />

      <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {treasuryInsightCardsData.map((card) => (
          <TreasuryInsightCard
            key={card.id}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            trend={card.trend}
            change={card.change}
          />
        ))}
      </section>

      <section className="mb-6">
        <CashflowForecastChart data={cashflowForecastData} height={300} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <AccountBalanceDistributionChart
          data={accountBalanceDistributionData}
          height={320}
        />
        <MonthlyExpenseBreakdownChart
          data={monthlyExpenseBreakdownData}
          height={320}
        />
      </section>
    </DashboardLayout>
  );
}
