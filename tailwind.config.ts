import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#050812",
        ink: "#091126",
        cyanGlow: "#23c7ff",
        violetGlow: "#9b5cff"
      },
      boxShadow: {
        glass: "0 24px 90px rgba(8, 16, 48, 0.48)",
        glow: "0 0 35px rgba(35, 199, 255, 0.28), 0 0 70px rgba(155, 92, 255, 0.22)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
