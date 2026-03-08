"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export interface RevenueExpensePoint {
  month: string;
  revenue: number;
  expenses: number;
}

interface RevenueVsExpensesChartProps {
  data: RevenueExpensePoint[];
  height?: number;
}

export function RevenueVsExpensesChart({
  data,
  height = 260,
}: RevenueVsExpensesChartProps) {
  return (
    <div className="card-premium flex flex-col p-6">
      <h3 className="heading-section">Revenue vs expenses</h3>
      <p className="body-muted mt-0.5">Monthly (K)</p>
      <div className="mt-4 min-h-[260px] w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={height}>
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            barGap={8}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              tickFormatter={(v) => `$${v}`}
              width={36}
            />
            <Tooltip
              contentStyle={{
                background: "var(--card-elevated)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
              }}
              formatter={(value) => [typeof value === "number" ? `$${value}K` : value, ""]}
              labelFormatter={(label) => label}
            />
            <Legend
              wrapperStyle={{ paddingTop: 12 }}
              formatter={(value) => (
                <span className="text-sm text-[var(--muted)]">{value}</span>
              )}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="var(--success)"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="var(--danger)"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
