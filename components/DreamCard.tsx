import Link from "next/link";
import { getCategory, type DreamEntry } from "@/lib/dreams";
import OmenBadge from "./OmenBadge";

export default function DreamCard({ dream }: { dream: DreamEntry }) {
  const cat = getCategory(dream.category);
  return (
    <Link
      href={`/giai-ma/${dream.slug}`}
      className="card-hover block bg-white rounded-3xl border border-blush-100 shadow-card p-5 h-full"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <OmenBadge omen={dream.omen} />
        {cat && (
          <span className="text-xs text-blush-500">
            {cat.icon} {cat.name}
          </span>
        )}
      </div>
      <h3 className="font-display font-semibold text-lg text-blush-900 mb-2 leading-snug">
        {dream.title}
      </h3>
      <p className="text-sm text-blush-900/65 leading-relaxed line-clamp-3">
        {dream.summary}
      </p>
      {dream.numbers.length > 0 && (
        <div className="mt-4 flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-blush-500">🔢 Số may mắn:</span>
          {dream.numbers.map((n) => (
            <span
              key={n}
              className="text-xs font-bold text-blush-700 bg-blush-100 rounded-lg px-2 py-0.5"
            >
              {n}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
