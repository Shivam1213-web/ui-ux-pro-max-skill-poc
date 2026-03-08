"use client";

import { KPICard, KPICardProps } from "./KPICard";

export interface KPIGridProps {
  cards: KPICardProps[];
  columns?: 2 | 3 | 4;
}

export function KPIGrid({ cards, columns = 4 }: KPIGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {cards.map((card, index) => (
        <KPICard key={index} {...card} />
      ))}
    </div>
  );
}
