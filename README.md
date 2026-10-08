# 🌙 Giải Mã Giấc Mơ — Điềm Báo Trong Văn Hóa Dân Gian

Website tra cứu và giải mã giấc mơ theo văn hóa dân gian Việt Nam với giao
diện hồng phấn dịu dàng. Người dùng có thể tìm kiếm giấc mơ, xem điềm báo
(điềm lành / điềm dữ / trung tính), đọc ý nghĩa chi tiết, lời khuyên và con
số may mắn theo sổ mơ dân gian.

🔗 **Deploy:** Vercel (xem hướng dẫn bên dưới)

## ✨ Tính năng

- 🔍 **Tra cứu giấc mơ** — tìm kiếm có dấu/không dấu, lọc theo 5 danh mục
  (Động vật, Thiên nhiên, Con người, Sự kiện & Hành động, Đồ vật) và loại
  điềm báo
- 📜 **115 giấc mơ** với ý nghĩa chi tiết, điềm báo và lời khuyên theo quan
  niệm dân gian Việt Nam
- 🔢 **Sổ mơ số may mắn** — tra cứu ngược từ con số (00–99) ra giấc mơ, bảng
  sổ mơ đầy đủ
- 🎲 **Gieo quẻ ngẫu nhiên** — nhận một lời giải mộng ngẫu nhiên
- 🎨 Giao diện hồng phấn, responsive, tối ưu SEO (metadata riêng cho từng
  giấc mơ)

## 🛠️ Công nghệ

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- Dữ liệu: file `lib/dreams.ts` (không cần database)

## 📁 Cấu trúc thư mục

```
giai-ma-giac-mo/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── tra-cuu/page.tsx      # Trang tra cứu & lọc giấc mơ
│   ├── so-mo/page.tsx        # Trang sổ mơ số may mắn
│   ├── giai-ma/[slug]/page.tsx  # Trang chi tiết từng giấc mơ
│   ├── layout.tsx            # Layout chung (header/footer, font, SEO)
│   └── globals.css           # Style toàn cục + bảng màu hồng phấn
├── components/               # Header, Footer, DreamCard, SearchBar...
├── lib/
│   └── dreams.ts             # 📚 DỮ LIỆU: 115 giấc mơ + hàm tìm kiếm/lọc
├── public/                   # Tài nguyên tĩnh
├── package.json
└── README.md
```

> Muốn thêm giấc mơ mới? Chỉ cần thêm một object vào mảng `DREAMS` trong
> `lib/dreams.ts` theo đúng cấu trúc `DreamEntry` — website tự động cập nhật
> trang tra cứu, sổ mơ và SEO.

## 💻 Chạy trên máy cá nhân

Yêu cầu: Node.js 18+

```bash
# 1. Cài đặt
npm install

# 2. Chạy dev (mở http://localhost:3000)
npm run dev

# 3. Build thử trước khi deploy
npm run build
```

## ⬆️ Đẩy code lên GitHub

```bash
cd giai-ma-giac-mo

git init
git add .
git commit -m "Khởi tạo website Giải Mã Giấc Mơ 🌙"
git branch -M main

# Tạo repository mới trên https://github.com/new (đặt tên ví dụ: giai-ma-giac-mo)
# rồi chạy:
git remote add origin https://github.com/<ten-tai-khoan>/giai-ma-giac-mo.git
git push -u origin main
```

## 🚀 Deploy lên Vercel thông qua GitHub

1. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản
   **GitHub**.
2. Nhấn **Add New... → Project** → chọn repository `giai-ma-giac-mo` vừa
   đẩy lên → nhấn **Import**.
3. Vercel tự nhận diện Next.js, giữ nguyên mọi thiết lập mặc định
   (Framework Preset: Next.js, Build Command: `next build`).
4. Nhấn **Deploy** và chờ khoảng 1–2 phút ☕
5. Xong! Website sẽ có địa chỉ dạng
   `https://giai-ma-giac-mo.vercel.app` (có thể đổi tên miền trong
   Settings → Domains).

> 🔄 **Tự động deploy:** mỗi lần bạn `git push` lên nhánh `main`, Vercel sẽ
> tự động build và deploy phiên bản mới — không cần thao tác gì thêm.

## 📝 Giấy phép & lưu ý

Nội dung giải mộng được tổng hợp từ quan niệm văn hóa dân gian, mang tính
tham khảo và chiêm nghiệm. Các con số may mắn không dùng cho mục đích cờ
bạc — hãy chơi có trách nhiệm và tuân thủ pháp luật.
