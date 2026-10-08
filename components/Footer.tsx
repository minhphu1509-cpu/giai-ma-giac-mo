import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-blush-50 to-blush-100 border-t border-blush-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌙</span>
              <span className="font-display font-bold text-blush-800">
                Giải Mã Giấc Mơ
              </span>
            </div>
            <p className="text-sm text-blush-900/70 leading-relaxed">
              Nơi lưu giữ và chia sẻ những cách giải mộng trong văn hóa dân
              gian Việt Nam — từ sổ mơ ông bà truyền lại đến những chiêm
              nghiệm đời sống.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blush-800 mb-3">Khám phá</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tra-cuu" className="text-blush-900/70 hover:text-blush-600">
                  🔍 Tra cứu giấc mơ
                </Link>
              </li>
              <li>
                <Link href="/so-mo" className="text-blush-900/70 hover:text-blush-600">
                  🔢 Sổ mơ số may mắn
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blush-900/70 hover:text-blush-600">
                  🏠 Trang chủ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blush-800 mb-3">Lưu ý</h4>
            <p className="text-xs text-blush-900/60 leading-relaxed">
              Nội dung trên website được tổng hợp từ quan niệm dân gian, mang
              tính tham khảo và chiêm nghiệm văn hóa. Không dùng các con số
              cho mục đích cờ bạc — hãy chơi có trách nhiệm và tuân thủ pháp
              luật.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blush-200 text-center text-xs text-blush-900/50">
          © 2026 Giải Mã Giấc Mơ — Gìn giữ nét đẹp văn hóa dân gian Việt Nam 💗
        </div>
      </div>
    </footer>
  );
}
