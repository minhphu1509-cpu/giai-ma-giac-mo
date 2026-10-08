"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/tra-cuu", label: "Tra cứu giấc mơ" },
  { href: "/so-mo", label: "Sổ mơ số" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-blush-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-3xl">🌙</span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-lg text-gradient-pink">
                Giải Mã Giấc Mơ
              </span>
              <span className="block text-[11px] text-blush-500 tracking-wide">
                Điềm báo dân gian Việt Nam
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-blush-800 hover:bg-blush-100 hover:text-blush-700 transition"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/tra-cuu"
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blush-400 to-blush-600 shadow-soft hover:opacity-90 transition"
            >
              ✨ Giải mộng ngay
            </Link>
          </nav>

          <button
            className="md:hidden text-2xl text-blush-700 px-2"
            onClick={() => setOpen(!open)}
            aria-label="Mở menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-blush-100 bg-white/95 px-4 py-3 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-blush-800 hover:bg-blush-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
