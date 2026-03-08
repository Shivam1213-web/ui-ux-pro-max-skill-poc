"use client";

const categoryIcons: Record<string, React.ReactNode> = {
  Software: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h2.25A2.25 2.25 0 0112.75 6v.878m-4.5 3a2.25 2.25 0 00-2.25 2.25v.878m0 0a2.25 2.25 0 102.25 2.25v.878m0 0a2.25 2.25 0 102.25 2.25V18m0 0a2.25 2.25 0 102.25-2.25v-.878M6 13.5a2.25 2.25 0 002.25 2.25h2.25A2.25 2.25 0 0012.75 13.5m-4.5 0a2.25 2.25 0 002.25-2.25M6 13.5V18m0 0a2.25 2.25 0 002.25 2.25h2.25A2.25 2.25 0 0018 18v-4.5m-4.5 0a2.25 2.25 0 002.25-2.25" />
    </svg>
  ),
  Travel: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  Office: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  Marketing: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5-1.5m-.5-1.5h1.923a11.51 11.51 0 003.428 5.4m.5-1.5h1.5m-1.5 0v-3.375c0-.621-.504-1.125-1.125-1.125H18M3.75 3h1.5m-1.5 0v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h16.5" />
    </svg>
  ),
  Other: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
};

interface CategoryIconProps {
  category: string;
  className?: string;
}

export function CategoryIcon({ category, className = "" }: CategoryIconProps) {
  return (
    <span className={`inline-flex shrink-0 text-[var(--muted)] ${className}`}>
      {categoryIcons[category] ?? categoryIcons.Other}
    </span>
  );
}
