"use client";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  strokeColor?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function Sparkline({
  data,
  width = 80,
  height = 28,
  strokeColor,
  trend = "neutral",
  className = "",
}: SparklineProps) {
  if (!data.length) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const stepX = data.length > 1 ? chartWidth / (data.length - 1) : 0;

  const points = data
    .map((value, i) => {
      const x = padding + i * stepX;
      const y = padding + chartHeight - ((value - min) / range) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  const color =
    strokeColor ??
    (trend === "up"
      ? "var(--success)"
      : trend === "down"
        ? "var(--danger)"
        : "var(--primary)");

  return (
    <svg
      width={width}
      height={height}
      className={`overflow-visible ${className}`}
      aria-hidden
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="transition-all duration-500 ease-out"
        style={{ stroke: color }}
      />
    </svg>
  );
}
