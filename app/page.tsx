import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import DreamCard from "@/components/DreamCard";
import RandomDream from "@/components/RandomDream";
import { CATEGORIES, DREAMS, getStats } from "@/lib/dreams";

const FEATURED_SLUGS = [
  "mo-thay-ran",
  "mo-thay-bay",
  "mo-thay-rung-rang",
  "mo-thay-nuoc-trong",
  "mo-thay-dam-cuoi",
  "mo-thay-tien",
];

export default function HomePage() {
  const stats = getStats();
  const featured = FEATURED_SLUGS.map(
    (s) => DREAMS.find((d) => d.slug === s)!
  ).filter(Boolean);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute top-10 left-[8%] text-4xl animate-floaty opacity-70 select-none">
          ☁️
        </div>
        <div
          className="absolute top-24 right-[10%] text-5xl animate-floaty opacity-70 select-none"
          style={{ animationDelay: "1.5s" }}
        >
          🌙
        </div>
        <div
          className="absolute bottom-16 left-[15%] text-3xl animate-floaty-slow opacity-60 select-none"
          style={{ animationDelay: "0.8s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-16 left-[45%] text-2xl animate-floaty-slow opacity-50 select-none"
          style={{ animationDelay: "2.2s" }}
        >
          💤
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-14 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-blush-200 rounded-full px-4 py-1.5 text-xs font-medium text-blush-700 mb-6 shadow-card">
            🌸 Kho tàng giải mộng dân gian Việt Nam 🌸
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-5">
            <span className="text-gradient-pink">Giải Mã Giấc Mơ</span>
            <br />
            <span className="text-blush-900 text-2xl md:text-4xl font-semibold">
              Điềm lành hay điềm dữ?
            </span>
          </h1>
          <p className="text-blush-900/65 max-w-2xl mx-auto mb-8 leading-relaxed">
            Đêm qua bạn mơ thấy gì? Tra cứu hơn{" "}
            <strong className="text-blush-700">{stats.total} giấc mơ</strong>{" "}
            phổ biến theo quan niệm dân gian — biết điềm báo, hiểu ý nghĩa và
            khám phá con số may mắn đi kèm.
          </p>
          <SearchBar big />

          {/* Gợi ý từ khóa phổ biến */}
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs text-blush-900/50">Thử ngay:</span>
            {[
              { label: "🐍 rắn", q: "rắn" },
              { label: "🦸 bay", q: "bay" },
              { label: "💒 đám cưới", q: "đám cưới" },
              { label: "💵 tiền", q: "tiền" },
              { label: "🐉 rồng", q: "rồng" },
              { label: "🌧️ mưa", q: "mưa" },
              { label: "👶 em bé", q: "em bé" },
              { label: "🦷 rụng răng", q: "rụng răng" },
            ].map((s) => (
              <Link
                key={s.q}
                href={`/tra-cuu?q=${encodeURIComponent(s.q)}`}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-blush-200 text-blush-700 hover:border-blush-400 hover:bg-blush-50 transition shadow-card"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 md:gap-10 text-center">
            <div>
              <div className="font-display text-3xl font-bold text-blush-600">
                {stats.total}
              </div>
              <div className="text-xs text-blush-900/55 mt-1">Giấc mơ</div>
            </div>
            <div className="w-px h-10 bg-blush-200" />
            <div>
              <div className="font-display text-3xl font-bold text-blush-600">
                {stats.categories}
              </div>
              <div className="text-xs text-blush-900/55 mt-1">Danh mục</div>
            </div>
            <div className="w-px h-10 bg-blush-200" />
            <div>
              <div className="font-display text-3xl font-bold text-blush-600">
                {stats.tot}
              </div>
              <div className="text-xs text-blush-900/55 mt-1">Điềm lành</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DANH MỤC ===== */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold text-blush-900 mb-2">
            Khám phá theo danh mục
          </h2>
          <p className="text-blush-900/60 text-sm">
            Từ động vật, thiên nhiên đến con người và đồ vật — mỗi nhóm mang
            những điềm báo rất riêng.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {CATEGORIES.map((cat) => {
            const count = DREAMS.filter((d) => d.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/tra-cuu?cat=${cat.id}`}
                className="card-hover bg-white rounded-3xl border border-blush-100 shadow-card p-4 md:p-6 text-center"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-blush-800 mb-1">
                  {cat.name}
                </div>
                <div className="text-xs text-blush-500">{count} giấc mơ</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== GIẤC MƠ NỔI BẬT ===== */}
      <section className="bg-blush-50/70 border-y border-blush-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-blush-900 mb-2">
                Giấc mơ được tìm nhiều nhất
              </h2>
              <p className="text-blush-900/60 text-sm">
                Những giấc mơ phổ biến mà ai cũng từng trải qua ít nhất một lần.
              </p>
            </div>
            <Link
              href="/tra-cuu"
              className="hidden sm:inline-block text-sm font-semibold text-blush-600 hover:text-blush-700 whitespace-nowrap"
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((d) => (
              <DreamCard key={d.slug} dream={d} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/tra-cuu"
              className="text-sm font-semibold text-blush-600"
            >
              Xem tất cả {stats.total} giấc mơ →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GIEO QUẺ + CÁCH DÙNG ===== */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-8 items-start">
        <RandomDream />
        <div className="bg-white rounded-[2rem] border border-blush-200 shadow-soft p-8">
          <h3 className="font-display text-2xl font-bold text-blush-800 mb-5">
            📖 Cách giải một giấc mơ
          </h3>
          <ol className="space-y-4 text-sm leading-relaxed text-blush-900/75">
            <li className="flex gap-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-blush-100 text-blush-700 font-bold flex items-center justify-center">
                1
              </span>
              <p>
                <strong className="text-blush-800">
                  Ghi nhớ chi tiết nổi bật nhất:
                </strong>{" "}
                con vật, hành động hay đồ vật nào xuất hiện rõ nhất trong mơ?
                Đó chính là "từ khóa" để tra cứu.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-blush-100 text-blush-700 font-bold flex items-center justify-center">
                2
              </span>
              <p>
                <strong className="text-blush-800">
                  Nhập từ khóa vào ô tìm kiếm:
                </strong>{" "}
                website hỗ trợ tìm kiếm có dấu và không dấu, ví dụ "ran" vẫn
                tìm ra "mơ thấy rắn".
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-blush-100 text-blush-700 font-bold flex items-center justify-center">
                3
              </span>
              <p>
                <strong className="text-blush-800">
                  Đọc điềm báo & lời khuyên:
                </strong>{" "}
                mỗi giấc mơ có đánh giá điềm lành/dữ, ý nghĩa chi tiết và con
                số may mắn theo sổ mơ dân gian.
              </p>
            </li>
          </ol>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 leading-relaxed">
            💡 <strong>Lưu ý:</strong> Các cách giải được tổng hợp từ quan
            niệm dân gian, mang tính tham khảo và chiêm nghiệm văn hóa. Giấc
            mơ đẹp nhất vẫn là giấc mơ giúp bạn sống tốt hơn mỗi ngày.
          </div>
        </div>
      </section>
    </div>
  );
}
