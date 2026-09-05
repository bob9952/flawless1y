import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#06265c",
        foam: "#f3f8ff",
        aqua: "#69b5ef",
        sky: "#b8defb",
        brand: {
          navy: "#06265c",
          blue: "#69b5ef",
          pale: "#e8f4ff",
        },
      },
      boxShadow: {
        soft: "0 24px 70px -28px rgba(6,38,92,.24)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "sheet-in": { from: { transform: "translateX(100%)" }, to: { transform: "translateX(0)" } },
        "sheet-out": { from: { transform: "translateX(0)" }, to: { transform: "translateX(100%)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-out": { from: { opacity: "1" }, to: { opacity: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down .25s ease-out",
        "accordion-up": "accordion-up .25s ease-out",
        "sheet-in": "sheet-in .25s ease-out",
        "sheet-out": "sheet-out .2s ease-in",
        "fade-in": "fade-in .2s ease-out",
        "fade-out": "fade-out .2s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config
