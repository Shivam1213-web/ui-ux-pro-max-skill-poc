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

const CATEGORY_COLORS: Record<string, string> = {
  Software: "var(--primary)",
  Travel: "var(--accent)",
  Marketing: "var(--warning)",
  Office: "var(--success)",
  Other: "var(--muted)",
};

export interface MonthlyExpenseBreakdownPoint {
  month: string;
  Software?: number;
  Travel?: number;
  Marketing?: number;
  Office?: number;
  Other?: number;
}

interface MonthlyExpenseBreakdownChartProps {
  data: MonthlyExpenseBreakdownPoint[];
  height?: number;
}

const categories = ["Software", "Travel", "Marketing", "Office", "Other"];

export function MonthlyExpenseBreakdownChart({
  data,
  height = 300,
}: MonthlyExpenseBreakdownChartProps) {
  return (
    <div className="card-premium flex flex-col p-6">
      <h3 className="heading-section">Monthly expense breakdown</h3>
      <p className="body-muted mt-0.5">By category ($K)</p>
      <div className="mt-4 min-h-[300px] w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={height}>
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            barGap={0}
            barCategoryGap="16%"
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
              formatter={(value) => [typeof value === "number" ? `$${value}K` : "", ""]}
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
            {categories.map((cat) => (
              <Bar
                key={cat}
                dataKey={cat}
                stackId="stack"
                fill={CATEGORY_COLORS[cat]}
                radius={cat === "Software" ? [4, 4, 0, 0] : 0}
                maxBarSize={24}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
