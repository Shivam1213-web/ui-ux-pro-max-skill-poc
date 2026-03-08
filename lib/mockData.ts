import type { Transaction } from "@/components/transactions/TransactionTable";
import type { ChartDataPoint } from "@/components/analytics/AnalyticsChart";
import type { CategorySpend } from "@/components/analytics/SpendByCategory";
import type { Insight } from "@/components/ai/AIInsightsPanel";
import type { FinancialInsight } from "@/components/ai/AIInsightsWidget";
import type { Payment } from "@/components/payments/PaymentsTable";

export interface ConnectedAccount {
  id: string;
  bankName: string;
  accountName: string;
  maskedAccountNumber: string;
  currentBalance: number;
  currency: string;
  lastSyncTime: string; // ISO date
}

export const connectedAccounts: ConnectedAccount[] = [
  {
    id: "1",
    bankName: "Chase",
    accountName: "Business Checking",
    maskedAccountNumber: "•••• 4521",
    currentBalance: 124420.5,
    currency: "USD",
    lastSyncTime: new Date(Date.now() - 1000 * 60 * 12).toISOString(), // 12m ago
  },
  {
    id: "2",
    bankName: "Bank of America",
    accountName: "Operating Account",
    maskedAccountNumber: "•••• 8832",
    currentBalance: 89200.0,
    currency: "USD",
    lastSyncTime: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45m ago
  },
  {
    id: "3",
    bankName: "Mercury",
    accountName: "Primary Reserve",
    maskedAccountNumber: "•••• 2109",
    currentBalance: 71129.48,
    currency: "USD",
    lastSyncTime: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5m ago
  },
];

export const payments: Payment[] = [
  {
    id: "1",
    beneficiary: "Acme Corp",
    bank: "Chase",
    amount: 12500.0,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    status: "completed",
  },
  {
    id: "2",
    beneficiary: "Cloud Services Inc",
    bank: "Mercury",
    amount: 2400.0,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    status: "pending",
  },
  {
    id: "3",
    beneficiary: "Office Supplies Co",
    bank: "Bank of America",
    amount: 892.5,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    status: "completed",
  },
  {
    id: "4",
    beneficiary: "Design Agency LLC",
    bank: "Chase",
    amount: 5500.0,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: "processing",
  },
  {
    id: "5",
    beneficiary: "Vendor XYZ",
    bank: "Wells Fargo",
    amount: 3200.0,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    status: "failed",
  },
  {
    id: "6",
    beneficiary: "Marketing Partners",
    bank: "Mercury",
    amount: 1800.0,
    currency: "USD",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    status: "completed",
  },
];

export const kpiCardsData = [
  { title: "Available balance", value: "$124,420.00", change: { value: 2.4, label: "vs last month", trend: "up" as const }, subtitle: "Primary account", iconKey: "wallet" as const },
  { title: "Spend this month", value: "$42,180.00", change: { value: 8.2, label: "vs last month", trend: "up" as const }, iconKey: "chart" as const },
  { title: "Pending approvals", value: "7", change: { value: 12, label: "from last week", trend: "down" as const }, iconKey: "check" as const },
  { title: "Cards in use", value: "12", subtitle: "3 virtual, 9 physical", iconKey: "users" as const },
];

/** Dashboard KPIs with optional sparkline data (last 10 points) */
export const dashboardKpiCardsData = [
  { title: "Total Balance", value: "$284,750.00", change: { value: 5.2, label: "vs last month", trend: "up" as const }, iconKey: "wallet" as const, sparklineData: [260, 265, 268, 272, 270, 275, 278, 280, 282, 284] },
  { title: "Incoming Payments", value: "$156,200.00", change: { value: 12.1, label: "this month", trend: "up" as const }, iconKey: "arrowDown" as const, sparklineData: [120, 125, 130, 128, 135, 140, 142, 148, 152, 156] },
  { title: "Outgoing Payments", value: "$98,450.00", change: { value: 3.4, label: "this month", trend: "up" as const }, iconKey: "arrowUp" as const, sparklineData: [92, 94, 91, 95, 96, 97, 95, 98, 97, 98] },
  { title: "Net Cashflow", value: "+$57,750.00", change: { value: 18.5, label: "vs last month", trend: "up" as const }, iconKey: "trend" as const, sparklineData: [42, 48, 45, 50, 52, 48, 55, 54, 56, 58] },
];

/** Cashflow trend for area chart (last 12 weeks) */
export const cashflowTrendData = [
  { week: "W1", value: 42 },
  { week: "W2", value: 48 },
  { week: "W3", value: 45 },
  { week: "W4", value: 52 },
  { week: "W5", value: 50 },
  { week: "W6", value: 55 },
  { week: "W7", value: 52 },
  { week: "W8", value: 58 },
  { week: "W9", value: 54 },
  { week: "W10", value: 60 },
  { week: "W11", value: 57 },
  { week: "W12", value: 62 },
];

/** Revenue vs expenses by month */
export const revenueVsExpensesData = [
  { month: "Sep", revenue: 142, expenses: 98 },
  { month: "Oct", revenue: 156, expenses: 105 },
  { month: "Nov", revenue: 148, expenses: 112 },
  { month: "Dec", revenue: 168, expenses: 118 },
  { month: "Jan", revenue: 175, expenses: 125 },
  { month: "Feb", revenue: 182, expenses: 132 },
];

/** Treasury: Cashflow forecast (actual + projected, $K) */
export const cashflowForecastData = [
  { month: "Jan", actual: 58, forecast: null },
  { month: "Feb", actual: 62, forecast: null },
  { month: "Mar", actual: 57, forecast: null },
  { month: "Apr", actual: null, forecast: 64 },
  { month: "May", actual: null, forecast: 68 },
  { month: "Jun", actual: null, forecast: 71 },
  { month: "Jul", actual: null, forecast: 65 },
  { month: "Aug", actual: null, forecast: 70 },
];

/** Treasury: Account balance distribution ($K) */
export const accountBalanceDistributionData = [
  { name: "Chase Business", value: 124.4, fill: "var(--primary)" },
  { name: "Bank of America", value: 89.2, fill: "var(--accent)" },
  { name: "Mercury Reserve", value: 71.1, fill: "var(--success)" },
];

/** Treasury: Monthly expense breakdown by category ($K) */
export const monthlyExpenseBreakdownData = [
  { month: "Sep", Software: 10.2, Travel: 7.8, Marketing: 6.1, Office: 4.2, Other: 5.4 },
  { month: "Oct", Software: 11.1, Travel: 8.2, Marketing: 6.5, Office: 4.5, Other: 5.8 },
  { month: "Nov", Software: 12.4, Travel: 8.9, Marketing: 7.6, Office: 5.2, Other: 6.1 },
  { month: "Dec", Software: 11.8, Travel: 9.2, Marketing: 7.2, Office: 4.8, Other: 6.5 },
  { month: "Jan", Software: 12.1, Travel: 8.5, Marketing: 7.6, Office: 5.0, Other: 6.2 },
  { month: "Feb", Software: 12.8, Travel: 9.0, Marketing: 8.2, Office: 5.2, Other: 6.8 },
];

/** Treasury: Key financial insight cards */
export const treasuryInsightCardsData = [
  { id: "1", title: "Liquidity ratio", value: "4.2x", subtitle: "Cash / monthly burn", trend: "up" as const, change: "+0.3 from last quarter" },
  { id: "2", title: "Runway", value: "18 mo", subtitle: "At current burn rate", trend: "neutral" as const, change: "Stable" },
  { id: "3", title: "Top expense", value: "Software", subtitle: "32% of spend", trend: "up" as const, change: "+2% vs prior month" },
  { id: "4", title: "Forecast variance", value: "±5%", subtitle: "Last 90 days", trend: "down" as const, change: "Within target" },
];

export const recentTransactions: Transaction[] = [
  { id: "1", description: "Subscription", merchant: "Adobe Creative Cloud", amount: -54.99, currency: "USD", date: "2025-03-06", category: "Software", type: "outbound", status: "completed" },
  { id: "2", description: "Refund", merchant: "Amazon Web Services", amount: 240.00, currency: "USD", date: "2025-03-05", category: "Software", type: "inbound", status: "completed" },
  { id: "3", description: "Flight booking", merchant: "United Airlines", amount: -420.50, currency: "USD", date: "2025-03-05", category: "Travel", type: "outbound", status: "completed" },
  { id: "4", description: "Office supplies", merchant: "Staples", amount: -189.22, currency: "USD", date: "2025-03-04", category: "Office", type: "outbound", status: "completed" },
  { id: "5", description: "Campaign spend", merchant: "Google Ads", amount: -1250.00, currency: "USD", date: "2025-03-04", category: "Marketing", type: "outbound", status: "completed" },
  { id: "6", description: "Wire transfer", merchant: "Client Co.", amount: 15000.00, currency: "USD", date: "2025-03-03", category: "Other", type: "inbound", status: "completed" },
  { id: "7", description: "Slack", merchant: "Slack Technologies", amount: -14.00, currency: "USD", date: "2025-03-03", category: "Software", type: "outbound", status: "completed" },
  { id: "8", description: "Hotel", merchant: "Marriott", amount: -320.00, currency: "USD", date: "2025-03-02", category: "Travel", type: "outbound", status: "completed" },
];

export const spendChartData: ChartDataPoint[] = [
  { label: "Mon", value: 4200 },
  { label: "Tue", value: 3800 },
  { label: "Wed", value: 5100 },
  { label: "Thu", value: 2900 },
  { label: "Fri", value: 6200 },
  { label: "Sat", value: 1800 },
  { label: "Sun", value: 2400 },
];

export const spendByCategoryData: CategorySpend[] = [
  { category: "Software", amount: 12400, percentage: 29, color: "var(--primary)" },
  { category: "Travel", amount: 8900, percentage: 21, color: "var(--accent)" },
  { category: "Marketing", amount: 7600, percentage: 18, color: "var(--warning)" },
  { category: "Office", amount: 5200, percentage: 12, color: "var(--success)" },
  { category: "Other", amount: 8080, percentage: 20, color: "var(--muted)" },
];

/** Dashboard AI Insights widget: expense alert, overdue, cashflow prediction */
export const dashboardFinancialInsights: FinancialInsight[] = [
  {
    id: "1",
    variant: "expense_up",
    title: "Expenses up 12% this month",
    description: "Spend is higher than last month. Top drivers: Software (+$840), Travel (+$620).",
    actionLabel: "View breakdown",
  },
  {
    id: "2",
    variant: "overdue",
    title: "3 invoices overdue",
    description: "Outstanding total: $4,200. Oldest invoice is 14 days past due.",
    actionLabel: "View invoices",
  },
  {
    id: "3",
    variant: "prediction",
    title: "Predicted cashflow dip next week",
    description: "Based on scheduled payables and typical inflows. Consider delaying non-essential spend.",
    actionLabel: "See forecast",
  },
];

export const aiInsights: Insight[] = [
  {
    id: "1",
    type: "saving",
    title: "Duplicate software subscriptions",
    description: "You have overlapping tools: Notion and Confluence both cover documentation. Consolidating could save ~$180/mo.",
    actionLabel: "Review subscriptions",
    impact: "Potential savings: ~$180/mo",
  },
  {
    id: "2",
    type: "alert",
    title: "Unusual spend in Marketing",
    description: "Marketing spend is 34% higher than your 90-day average. Last spike: Google Ads on Mar 4.",
    actionLabel: "View details",
  },
  {
    id: "3",
    type: "recommendation",
    title: "Optimize card limits",
    description: "3 cards haven’t had any transactions in 60 days. Consider pausing or lowering limits to reduce exposure.",
    actionLabel: "Manage cards",
  },
];
