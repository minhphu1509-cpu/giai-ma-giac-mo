import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vn",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giải Mã Giấc Mơ — Điềm Báo Trong Văn Hóa Dân Gian",
  description:
    "Tra cứu và giải mã hơn 100 giấc mơ phổ biến theo văn hóa dân gian Việt Nam: điềm lành hay điềm dữ, ý nghĩa chi tiết và con số may mắn (sổ mơ).",
  keywords: [
    "giải mã giấc mơ",
    "nằm mơ",
    "điềm báo",
    "sổ mơ",
    "mơ thấy rắn",
    "văn hóa dân gian",
  ],
  openGraph: {
    title: "Giải Mã Giấc Mơ — Điềm Báo Trong Văn Hóa Dân Gian",
    description:
      "Tra cứu hơn 100 giấc mơ: điềm lành hay dữ, ý nghĩa chi tiết và con số may mắn.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌙</text></svg>"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
