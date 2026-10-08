"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import OmenBadge from "@/components/OmenBadge";
import { DREAMS, getCategory, searchByNumber } from "@/lib/dreams";

function SoMoInner() {
  const params = useSearchParams();
  const [numStr, setNumStr] = useState(params.get("num") ?? "");

  const num = parseInt(numStr, 10);
  const hasNum = numStr.trim() !== "" && !isNaN(num);
  const matches = useMemo(
    () => (hasNum ? searchByNumber(num) : []),
    [hasNum, num]
  );

  // Gom nhóm: số -> danh sách giấc mơ (để hiển thị bảng sổ mơ đầy đủ)
  const numberIndex = useMemo(() => {
    const map = new Map<number, { slug: string; title: string }[]>();
    for (const d of DREAMS) {
      for (const n of d.numbers) {
        if (!map.has(n)) map.set(n, []);
        map.get(n)!.push({ slug: d.slug, title: d.title });
      }
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-blush-900 mb-2">
          🔢 Sổ mơ số may mắn
        </h1>
        <p className="text-blush-900/60 text-sm max-w-xl mx-auto">
          Theo quan niệm dân gian, mỗi giấc mơ gắn với những con số may mắn.
          Nhập một con số để xem nó ứng với giấc mơ nào.
        </p>
      </div>

      {/* Tra cứu theo số */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="flex items-center bg-white rounded-full shadow-soft border border-blush-200 p-2 pl-6 focus-within:border-blush-400 focus-within:ring-4 focus-within:ring-blush-200/60 transition">
          <span className="text-xl mr-2">🔢</span>
          <input
            value={numStr}
            onChange={(e) =>
              setNumStr(e.target.value.replace(/[^0-9]/g, "").slice(0, 2))
            }
            placeholder="Nhập con số từ 00 đến 99..."
            inputMode="numeric"
            className="flex-1 bg-transparent outline-none text-blush-900 placeholder:text-blush-900/35 py-2 text-lg font-semibold tracking-widest"
          />
          {numStr && (
            <button
              onClick={() => setNumStr("")}
              className="text-blush-400 hover:text-blush-600 px-3 text-lg"
              aria-label="Xóa"
            >
              ✕
            </button>
          )}
        </div>

        {hasNum && (
          <div className="mt-6 bg-white rounded-3xl border border-blush-200 shadow-card p-6">
            {matches.length === 0 ? (
              <p className="text-center text-sm text-blush-900/55 py-4">
                Số <strong className="text-blush-700">{num}</strong> chưa gắn
                với giấc mơ nào trong kho dữ liệu hiện tại 🌫️
              </p>
            ) : (
              <>
                <p className="text-sm text-blush-900/60 mb-4 text-center">
                  Số <strong className="text-blush-700 text-lg">{num}</strong>{" "}
                  ứng với {matches.length} giấc mơ:
                </p>
                <div className="space-y-3">
                  {matches.map((d) => {
                    const cat = getCategory(d.category);
                    return (
                      <Link
                        key={d.slug}
                        href={`/giai-ma/${d.slug}`}
                        className="card-hover flex items-center justify-between gap-3 bg-blush-50 rounded-2xl p-4 border border-blush-100"
                      >
                        <div>
                          <div className="font-semibold text-blush-800">
                            {d.title}
                          </div>
                          <div className="text-xs text-blush-500 mt-0.5">
                            {cat?.icon} {cat?.name}
                          </div>
                        </div>
                        <OmenBadge omen={d.omen} />
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Bảng sổ mơ đầy đủ */}
      <h2 className="font-display text-2xl font-bold text-blush-900 mb-2 text-center">
        📖 Bảng sổ mơ đầy đủ
      </h2>
      <p className="text-xs text-blush-900/50 text-center mb-6">
        Toàn bộ con số từ 00–99 xuất hiện trong kho giấc mơ — nhấn vào số để
        xem chi tiết.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {numberIndex.map(([n, dreams]) => (
          <button
            key={n}
            onClick={() => setNumStr(String(n))}
            className="card-hover text-left bg-white rounded-2xl border border-blush-100 shadow-card p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blush-400 to-blush-600 text-white font-display font-bold flex items-center justify-center shadow-soft">
                {n}
              </span>
              <span className="text-xs text-blush-500">
                {dreams.length} giấc mơ
              </span>
            </div>
            <div className="text-xs text-blush-900/65 leading-relaxed line-clamp-2">
              {dreams.map((d) => d.title).join(" · ")}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 leading-relaxed max-w-2xl mx-auto text-center">
        ⚠️ Các con số trong sổ mơ chỉ mang tính tham khảo văn hóa dân gian,
        giúp chiêm nghiệm cho vui. Vui lòng không sử dụng cho mục đích cờ bạc,
        lô đề — hãy chơi có trách nhiệm và tuân thủ pháp luật.
      </div>
    </div>
  );
}

export default function SoMoPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-blush-500">
          Đang tải...
        </div>
      }
    >
      <SoMoInner />
    </Suspense>
  );
}
