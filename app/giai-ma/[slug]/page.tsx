import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DreamCard from "@/components/DreamCard";
import OmenBadge from "@/components/OmenBadge";
import ShareButtons from "@/components/ShareButtons";
import {
  DREAMS,
  OMEN_LABEL,
  getCategory,
  getDream,
  relatedDreams,
} from "@/lib/dreams";

export function generateStaticParams() {
  return DREAMS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const dream = getDream(params.slug);
  if (!dream) return {};
  return {
    title: `${dream.title} là điềm gì? | Giải Mã Giấc Mơ`,
    description: `${dream.title}: ${dream.summary} ${dream.numbers.length ? `Số may mắn: ${dream.numbers.join(", ")}.` : ""}`,
  };
}

export default function DreamDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const dream = getDream(params.slug);
  if (!dream) notFound();

  const cat = getCategory(dream.category);
  const related = relatedDreams(dream, 6);

  // Dữ liệu có cấu trúc JSON-LD giúp Google hiểu và hiển thị đẹp hơn
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${dream.title} là điềm gì?`,
    description: dream.summary,
    inLanguage: "vi-VN",
    author: {
      "@type": "Organization",
      name: "Giải Mã Giấc Mơ",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="text-xs text-blush-900/50 mb-6">
        <Link href="/" className="hover:text-blush-600">
          Trang chủ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tra-cuu" className="hover:text-blush-600">
          Tra cứu
        </Link>
        <span className="mx-2">/</span>
        <span className="text-blush-700 font-medium">{dream.title}</span>
      </nav>

      {/* Tiêu đề */}
      <div className="bg-white rounded-[2rem] border border-blush-200 shadow-soft p-6 md:p-10 mb-5 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
        <div
          className="absolute -top-4 right-2 md:right-4 text-[72px] md:text-[110px] opacity-[0.13] rotate-12 select-none pointer-events-none"
          aria-hidden
        >
          {dream.icon}
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span
              className="w-14 h-14 rounded-2xl bg-blush-100 flex items-center justify-center text-4xl shadow-card shrink-0"
              aria-hidden
            >
              {dream.icon}
            </span>
            <OmenBadge omen={dream.omen} size="md" />
            {cat && (
              <Link
                href={`/tra-cuu?cat=${cat.id}`}
                className="text-sm text-blush-500 hover:text-blush-700"
              >
                {cat.icon} {cat.name}
              </Link>
            )}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-blush-900 mb-4">
            {dream.title} <span className="text-gradient-pink">là điềm gì?</span>
          </h1>
          <p className="text-lg text-blush-900/75 leading-relaxed border-l-4 border-blush-300 pl-4 italic">
            {dream.summary}
          </p>
        </div>
      </div>

      {/* Chia sẻ */}
      <div className="mb-6">
        <ShareButtons title={`${dream.title} là điềm gì? | Giải Mã Giấc Mơ`} />
      </div>

      {/* Ý nghĩa chi tiết */}
      <div className="bg-white rounded-[2rem] border border-blush-100 shadow-card p-6 md:p-8 mb-6">
        <h2 className="font-display text-xl font-bold text-blush-800 mb-4 flex items-center gap-2">
          📜 Ý nghĩa chi tiết
        </h2>
        {dream.meaning.split("\n").map((p, i) => (
          <p
            key={i}
            className="text-blush-900/75 leading-relaxed mb-3 last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Lời khuyên */}
      <div className="rounded-[2rem] p-6 md:p-8 mb-6 bg-gradient-to-br from-blush-100 to-blush-200/60 border border-blush-200">
        <h2 className="font-display text-xl font-bold text-blush-800 mb-3 flex items-center gap-2">
          💗 Lời khuyên dành cho bạn
        </h2>
        <p className="text-blush-900/80 leading-relaxed">{dream.advice}</p>
      </div>

      {/* Số may mắn */}
      {dream.numbers.length > 0 && (
        <div className="bg-white rounded-[2rem] border border-blush-100 shadow-card p-6 md:p-8 mb-6 text-center">
          <h2 className="font-display text-xl font-bold text-blush-800 mb-2">
            🔢 Con số may mắn theo sổ mơ
          </h2>
          <p className="text-xs text-blush-900/50 mb-5">
            Dân gian lưu truyền những con số gắn với giấc mơ này:
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {dream.numbers.map((n) => (
              <Link
                key={n}
                href={`/so-mo?num=${n}`}
                className="card-hover w-16 h-16 rounded-2xl bg-gradient-to-br from-blush-400 to-blush-600 text-white font-display font-bold text-2xl flex items-center justify-center shadow-soft"
              >
                {n}
              </Link>
            ))}
          </div>
          <p className="text-[11px] text-blush-900/45 mt-5 max-w-md mx-auto">
            * Các con số chỉ mang tính tham khảo văn hóa dân gian. Vui lòng
            không dùng cho mục đích cờ bạc.
          </p>
        </div>
      )}

      {/* Giấc mơ liên quan */}
      {related.length > 0 && (
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold text-blush-900 mb-5">
            🌸 Có thể bạn cũng mơ thấy
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((d) => (
              <DreamCard key={d.slug} dream={d} />
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          href="/tra-cuu"
          className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blush-400 to-blush-600 shadow-soft hover:opacity-90 transition"
        >
          ← Tra cứu giấc mơ khác
        </Link>
      </div>
    </div>
  );
}
