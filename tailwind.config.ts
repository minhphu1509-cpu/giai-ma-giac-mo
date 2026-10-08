import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bảng màu hồng phấn chủ đạo
        blush: {
          50: "#FDF4F7",
          100: "#FCE8F0",
          200: "#F9D2E2",
          300: "#F4AFCC",
          400: "#EC83B3",
          500: "#E15A97",
          600: "#C93E7D",
          700: "#A82E66",
          800: "#8A2A56",
          900: "#72264A",
        },
        cream: "#FFFBF8",
      },
      fontFamily: {
        sans: ["var(--font-be-vn)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(225, 90, 151, 0.12)",
        card: "0 4px 20px rgba(225, 90, 151, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
