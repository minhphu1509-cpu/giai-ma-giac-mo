"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({
  placeholder = "Đêm qua bạn mơ thấy gì? Ví dụ: rắn, bay, đám cưới...",
  big = false,
}: {
  placeholder?: string;
  big?: boolean;
}) {
  const [q, setQ] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tra-cuu?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <form onSubmit={submit} className={`w-full ${big ? "max-w-2xl" : "max-w-xl"} mx-auto`}>
      <div
        className={`flex items-center bg-white rounded-full shadow-soft border border-blush-200 overflow-hidden focus-within:border-blush-400 focus-within:ring-4 focus-within:ring-blush-200/60 transition ${
          big ? "p-2 pl-6" : "p-1.5 pl-5"
        }`}
      >
        <span className={`${big ? "text-2xl" : "text-xl"} mr-2`}>🔍</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 min-w-0 bg-transparent outline-none placeholder:text-blush-900/35 text-blush-900 ${
            big ? "text-base md:text-lg py-2" : "text-sm py-1.5"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-full font-semibold text-white bg-gradient-to-r from-blush-400 to-blush-600 hover:opacity-90 transition whitespace-nowrap ${
            big ? "px-5 py-3 text-sm md:px-8 md:py-3.5 md:text-base" : "px-5 py-2 text-sm"
          }`}
        >
          Giải mộng
        </button>
      </div>
    </form>
  );
}
