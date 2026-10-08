"use client";

import { useState } from "react";
import Link from "next/link";
import { DREAMS, getCategory, type DreamEntry } from "@/lib/dreams";
import OmenBadge from "./OmenBadge";

export default function RandomDream() {
  const [dream, setDream] = useState<DreamEntry | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    // Hiệu ứng "gieo quẻ" chạy qua vài giấc mơ rồi dừng
    let ticks = 0;
    const timer = setInterval(() => {
      setDream(DREAMS[Math.floor(Math.random() * DREAMS.length)]);
      ticks++;
      if (ticks > 8) {
        clearInterval(timer);
        setRolling(false);
      }
    }, 90);
  };

  const cat = dream ? getCategory(dream.category) : null;

  return (
    <div className="bg-white rounded-[2rem] border border-blush-200 shadow-soft p-6 md:p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="relative">
        <div className="text-5xl mb-4 animate-floaty-slow">🎲</div>
        <h3 className="font-display text-2xl font-bold text-blush-800 mb-2">
          Gieo quẻ giấc mơ
        </h3>
        <p className="text-sm text-blush-900/60 mb-6 max-w-md mx-auto">
          Không nhớ rõ chi tiết? Hãy thành tâm nghĩ về giấc mơ đêm qua rồi nhấn
          gieo quẻ để nhận một lời giải ngẫu nhiên.
        </p>
        <button
          onClick={roll}
          disabled={rolling}
          className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blush-400 to-blush-600 shadow-soft hover:opacity-90 transition disabled:opacity-60"
        >
          {rolling ? "Đang gieo..." : "✨ Gieo quẻ ngay"}
        </button>

        {dream && (
          <div
            className={`mt-6 text-left bg-blush-50 rounded-3xl p-6 border border-blush-200 transition-opacity ${
              rolling ? "opacity-60" : "opacity-100"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <OmenBadge omen={dream.omen} size="md" />
              {cat && (
                <span className="text-sm text-blush-500">
                  {cat.icon} {cat.name}
                </span>
              )}
            </div>
            <Link
              href={`/giai-ma/${dream.slug}`}
              className="font-display text-xl font-bold text-blush-800 hover:text-blush-600"
            >
              {dream.title} →
            </Link>
            <p className="mt-2 text-sm text-blush-900/70 leading-relaxed">
              {dream.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
