"use client";

interface BankLogoFallbackProps {
  /** Bank name (e.g. "Chase") – uses first letter for fallback */
  name: string;
  className?: string;
}

export function BankLogoFallback({ name, className = "" }: BankLogoFallbackProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <span
      className={`flex h-full w-full items-center justify-center text-xl font-bold text-[var(--muted)] ${className}`}
      aria-hidden
    >
      {initial}
    </span>
  );
}
