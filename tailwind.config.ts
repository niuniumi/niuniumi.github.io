import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serifDisplay: ['"Instrument Serif"', "serif"],
      },
      colors: {
        glass: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
