"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export interface CashflowTrendPoint {
  week: string;
  value: number;
}

interface CashflowTrendChartProps {
  data: CashflowTrendPoint[];
  height?: number;
}

export function CashflowTrendChart({ data, height = 260 }: CashflowTrendChartProps) {
  return (
    <div className="card-premium flex flex-col p-6">
      <h3 className="heading-section">Cashflow trend</h3>
      <p className="body-muted mt-0.5">Last 12 weeks (K)</p>
      <div className="mt-4 min-h-[260px] w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={height}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="cashflowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" vertical={false} />
            <XAxis
              dataKey="week"
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
              labelStyle={{ color: "var(--foreground)" }}
              formatter={(value) => [typeof value === "number" ? `$${value}K` : value, "Cashflow"]}
              labelFormatter={(label) => label}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--primary)"
              strokeWidth={2}
              fill="url(#cashflowGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
