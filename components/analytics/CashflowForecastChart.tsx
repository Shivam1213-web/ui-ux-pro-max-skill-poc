"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts";

export interface CashflowForecastPoint {
  month: string;
  actual: number | null;
  forecast: number | null;
}

interface CashflowForecastChartProps {
  data: CashflowForecastPoint[];
  height?: number;
}

export function CashflowForecastChart({
  data,
  height = 280,
}: CashflowForecastChartProps) {
  const forecastStartIndex = data.findIndex((d) => d.forecast != null && d.actual == null);
  const lastActualIndex = forecastStartIndex >= 0 ? forecastStartIndex - 1 : data.length - 1;

  return (
    <div className="card-premium flex flex-col p-6">
      <h3 className="heading-section">Cashflow forecast</h3>
      <p className="body-muted mt-0.5">Actual vs projected net cashflow ($K)</p>
      <div className="mt-4 min-h-[280px] w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={height}>
          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
              formatter={(value) =>
                typeof value === "number" ? [`$${value}K`, ""] : [null, ""]
              }
              labelFormatter={(label) => label}
            />
            <Legend
              wrapperStyle={{ paddingTop: 8 }}
              formatter={(value) => (
                <span className="text-sm text-[var(--muted)]">{value}</span>
              )}
              iconType="line"
              iconSize={12}
            />
            {forecastStartIndex >= 0 && lastActualIndex >= 0 && (
              <ReferenceLine
                x={data[forecastStartIndex]?.month}
                stroke="var(--muted)"
                strokeDasharray="4 4"
              />
            )}
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ fill: "var(--primary)", strokeWidth: 0, r: 4 }}
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke="var(--accent)"
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={{ fill: "var(--accent)", strokeWidth: 0, r: 4 }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
