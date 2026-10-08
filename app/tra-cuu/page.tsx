"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DreamCard from "@/components/DreamCard";
import OmenBadge from "@/components/OmenBadge";
import {
  CATEGORIES,
  DREAMS,
  OMEN_LABEL,
  filterDreams,
  searchDreams,
  type Omen,
} from "@/lib/dreams";

function TraCuuInner() {
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const initialCat = params.get("cat") ?? "";

  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState(initialCat);
  const [omen, setOmen] = useState<Omen | "">("");

  const results = useMemo(() => {
    const base = filterDreams(cat || undefined, omen || undefined);
    if (!q.trim()) return base;
    const searched = new Set(searchDreams(q).map((d) => d.slug));
    return base.filter((d) => searched.has(d.slug));
  }, [q, cat, omen]);

  const omens: (Omen | "")[] = ["", "tot", "xau", "trung-tinh"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-blush-900 mb-2">
          🔍 Tra cứu giấc mơ
        </h1>
        <p className="text-blush-900/60 text-sm max-w-xl mx-auto">
          Tìm kiếm theo từ khóa (có dấu hoặc không dấu đều được), lọc theo
          danh mục và loại điềm báo.
        </p>
      </div>

      {/* Ô tìm kiếm */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex items-center bg-white rounded-full shadow-soft border border-blush-200 p-2 pl-6 focus-within:border-blush-400 focus-within:ring-4 focus-within:ring-blush-200/60 transition">
          <span className="text-xl mr-2">🔍</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nhập từ khóa: rắn, bay, cưới, tiền..."
            className="flex-1 bg-transparent outline-none text-blush-900 placeholder:text-blush-900/35 py-2"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="text-blush-400 hover:text-blush-600 px-2 text-lg"
              aria-label="Xóa tìm kiếm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Lọc danh mục */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        <button
          onClick={() => setCat("")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
            cat === ""
              ? "bg-blush-500 text-white border-blush-500 shadow-soft"
              : "bg-white text-blush-700 border-blush-200 hover:border-blush-400"
          }`}
        >
          🌸 Tất cả
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(cat === c.id ? "" : c.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              cat === c.id
                ? "bg-blush-500 text-white border-blush-500 shadow-soft"
                : "bg-white text-blush-700 border-blush-200 hover:border-blush-400"
            }`}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      {/* Lọc điềm báo */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {omens.map((o) => (
          <button
            key={o || "all"}
            onClick={() => setOmen(o)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition border ${
              omen === o
                ? "bg-blush-800 text-white border-blush-800"
                : "bg-white text-blush-700 border-blush-200 hover:border-blush-400"
            }`}
          >
            {o === "" ? "Mọi điềm báo" : `${OMEN_LABEL[o].label}`}
          </button>
        ))}
      </div>

      {/* Kết quả */}
      <p className="text-sm text-blush-900/55 mb-5 text-center">
        Tìm thấy <strong className="text-blush-700">{results.length}</strong>{" "}
        giấc mơ
        {q.trim() && (
          <>
            {" "}
            cho từ khóa "<strong className="text-blush-700">{q.trim()}</strong>"
          </>
        )}
      </p>

      {results.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-blush-100">
          <div className="text-5xl mb-4">🌫️</div>
          <p className="font-semibold text-blush-800 mb-2">
            Chưa tìm thấy giấc mơ phù hợp
          </p>
          <p className="text-sm text-blush-900/55 max-w-md mx-auto">
            Hãy thử từ khóa ngắn gọn hơn (ví dụ: "rắn" thay vì "con rắn cắn
            tôi"), hoặc thử tìm không dấu.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((d) => (
            <DreamCard key={d.slug} dream={d} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TraCuuPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-blush-500">
          Đang tải...
        </div>
      }
    >
      <TraCuuInner />
    </Suspense>
  );
}
