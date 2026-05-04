import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oil: {
          950: "#050608",
          900: "#0b0d13",
          700: "#1e2333",
          500: "#3a445f",
          300: "#95a2c8",
          100: "#dce3f7"
        }
      },
      boxShadow: {
        glow: "0 0 120px rgba(87, 125, 255, 0.35)",
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at center, rgba(123,146,255,.15), rgba(0,0,0,0) 58%)",
      }
    },
  },
  plugins: [],
};

export default config;
