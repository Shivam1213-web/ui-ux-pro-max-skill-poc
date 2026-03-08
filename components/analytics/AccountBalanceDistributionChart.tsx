"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export interface BalanceDistributionPoint {
  name: string;
  value: number;
  fill?: string;
}

interface AccountBalanceDistributionChartProps {
  data: BalanceDistributionPoint[];
  height?: number;
}

export function AccountBalanceDistributionChart({
  data,
  height = 280,
}: AccountBalanceDistributionChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="card-premium flex flex-col p-6">
      <h3 className="heading-section">Account balance distribution</h3>
      <p className="body-muted mt-0.5">Total: ${total.toFixed(1)}K across accounts</p>
      <div className="mt-4 min-h-[280px] w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill ?? `var(--primary)`} stroke="var(--card-elevated)" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "var(--card-elevated)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
              }}
              formatter={(value, name) => [
                typeof value === "number"
                  ? `$${value.toFixed(1)}K (${total > 0 ? ((value / total) * 100).toFixed(0) : 0}%)`
                  : "",
                name,
              ]}
            />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value, entry) => {
                const payload = entry.payload as BalanceDistributionPoint | undefined;
                return (
                  <span className="text-sm text-[var(--muted)]">
                    {value} — ${(payload?.value ?? 0).toFixed(1)}K
                  </span>
                );
              }}
              iconType="circle"
              iconSize={10}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
