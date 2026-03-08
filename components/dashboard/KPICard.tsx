"use client";

import { ReactNode } from "react";
import { Sparkline } from "@/components/ui/Sparkline";

export interface KPICardProps {
  title: string;
  value: string;
  change?: {
    value: number;
    label: string;
    trend: "up" | "down" | "neutral";
  };
  icon?: ReactNode;
  subtitle?: string;
  /** Mini sparkline data (e.g. last 7–12 values) */
  sparklineData?: number[];
  gradientIcon?: boolean;
}

export function KPICard({
  title,
  value,
  change,
  icon,
  subtitle,
  sparklineData,
  gradientIcon = true,
}: KPICardProps) {
  const trendColors = {
    up: "text-[var(--success)]",
    down: "text-[var(--danger)]",
    neutral: "text-[var(--muted)]",
  };

  return (
    <div className="card-premium group relative cursor-default overflow-hidden p-6">
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-[var(--radius-2xl)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="body-muted text-xs font-medium uppercase tracking-wider">
              {title}
            </p>
            <p className="mt-2 truncate text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {value}
            </p>
            {subtitle && (
              <p className="mt-1 text-xs text-[var(--muted)]">{subtitle}</p>
            )}
            {change && (
              <p
                className={`mt-3 flex items-center gap-1.5 text-sm font-medium ${trendColors[change.trend]}`}
              >
                {change.trend === "up" && (
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                )}
                {change.trend === "down" && (
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                )}
                <span>{change.value}%</span>
                <span className="font-normal text-[var(--muted)]">
                  {change.label}
                </span>
              </p>
            )}
          </div>
          {icon && (
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 ease-out group-hover:scale-110 ${
                gradientIcon ? "" : "bg-[var(--primary-muted)] text-[var(--primary)]"
              }`}
              style={
                gradientIcon
                  ? {
                      background: "var(--gradient-primary)",
                      boxShadow: "0 4px 16px -2px rgba(45, 212, 191, 0.35)",
                    }
                  : undefined
              }
            >
              {icon}
            </div>
          )}
        </div>
        {sparklineData && sparklineData.length > 0 && (
          <div className="mt-4 flex justify-end">
            <Sparkline
              data={sparklineData}
              trend={change?.trend ?? "neutral"}
              width={100}
              height={32}
            />
          </div>
        )}
      </div>
    </div>
  );
}
