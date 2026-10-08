"use client";

import { useState } from "react";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => window.location.href;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard không khả dụng (một số trình duyệt cũ)
      const ta = document.createElement("textarea");
      ta.value = getUrl();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: title, url: getUrl() });
      } catch {
        // Người dùng hủy chia sẻ — không làm gì
      }
    } else {
      copyLink();
    }
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      getUrl()
    )}`;
    window.open(url, "_blank", "noopener,width=600,height=500");
  };

  const btn =
    "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition";

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <span className="text-sm text-blush-900/55 mr-1">Chia sẻ:</span>
      <button
        onClick={nativeShare}
        className={`${btn} bg-blush-500 text-white border-blush-500 hover:bg-blush-600 shadow-soft`}
      >
        📤 Chia sẻ
      </button>
      <button
        onClick={shareFacebook}
        className={`${btn} bg-white text-blush-700 border-blush-200 hover:border-blush-400 hover:bg-blush-50`}
      >
        <span className="font-bold text-[#1877F2]">f</span> Facebook
      </button>
      <button
        onClick={copyLink}
        className={`${btn} ${
          copied
            ? "bg-emerald-100 text-emerald-700 border-emerald-200"
            : "bg-white text-blush-700 border-blush-200 hover:border-blush-400 hover:bg-blush-50"
        }`}
      >
        {copied ? "✓ Đã sao chép!" : "🔗 Sao chép link"}
      </button>
    </div>
  );
}
