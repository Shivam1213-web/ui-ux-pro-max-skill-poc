"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const mockNotifications = [
  { id: "1", title: "Payment received", body: "Acme Corp sent $12,500.00", time: "12m ago", read: false },
  { id: "2", title: "Invoice overdue", body: "3 invoices past due — $4,200 total", time: "1h ago", read: false },
  { id: "3", title: "Budget alert", body: "Marketing spend 34% above target", time: "2h ago", read: true },
];

export function Header() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-4 border-b border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 backdrop-blur-xl sm:px-6"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.2), var(--shadow-inner)",
      }}
    >
      <div className="flex flex-1 items-center max-w-xl">
        <label htmlFor="global-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            id="global-search"
            type="search"
            placeholder="Search transactions, accounts..."
            className="h-10 w-full rounded-xl border border-[var(--card-border)] bg-[var(--muted-bg)] py-2 pl-10 pr-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] transition-all duration-300 focus:border-[var(--primary)] focus:bg-[var(--card-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
            aria-label="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/payments"
          className="hidden sm:inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "0 4px 14px -2px rgba(45, 212, 191, 0.35)",
          }}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Send Payment
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setNotificationsOpen((o) => !o)}
            className="relative flex h-10 w-10 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl text-[var(--muted)] transition-all duration-300 hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            aria-label="View notifications"
            aria-expanded={notificationsOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--primary)] ring-2 ring-[var(--glass-bg)]" aria-hidden />
          </button>

          {notificationsOpen && (
            <div
              className="absolute right-0 top-full z-30 mt-2 w-80 overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-elevated)] shadow-[var(--shadow-card-hover)]"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="border-b border-[var(--card-border)] px-4 py-3">
                <h3 className="text-sm font-semibold text-[var(--foreground)]">Notifications</h3>
              </div>
              <ul className="max-h-80 overflow-auto py-2">
                {mockNotifications.map((n) => (
                  <li key={n.id} role="none">
                    <button
                      type="button"
                      className="w-full px-4 py-3 text-left transition-colors hover:bg-[var(--muted-bg)]/50"
                      role="menuitem"
                    >
                      <p className={`text-sm font-medium ${n.read ? "text-[var(--muted)]" : "text-[var(--foreground)]"}`}>
                        {n.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">{n.body}</p>
                      <p className="mt-1 text-xs text-[var(--muted)]">{n.time}</p>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[var(--card-border)] px-4 py-2">
                <Link
                  href="/"
                  className="block text-center text-sm font-medium text-[var(--primary)] hover:underline"
                >
                  View all
                </Link>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-3 rounded-xl py-1.5 pl-1 pr-3 transition-all duration-300 hover:bg-[var(--muted-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          aria-label="Open user menu"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-medium text-white shadow-lg transition-all duration-300 ease-out hover:scale-105"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 4px 14px -2px rgba(45, 212, 191, 0.35)",
            }}
          >
            JD
          </span>
          <span className="hidden text-left text-sm font-medium text-[var(--foreground)] sm:block">
            John Doe
          </span>
        </button>
      </div>
    </header>
  );
}
