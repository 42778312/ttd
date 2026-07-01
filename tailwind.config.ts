import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#010101",
        surface: {
          DEFAULT: "#141313",
          dim: "#141313",
          bright: "#3a3939",
          container: {
            lowest: "#0e0e0e",
            low: "#1c1b1b",
            DEFAULT: "#201f1f",
            high: "#2a2a2a",
            highest: "#353434",
          },
        },
        primary: {
          DEFAULT: "#ff0050",
          light: "#ffb2b7",
          container: "#ff516a",
        },
        secondary: {
          DEFAULT: "#00f2ea",
          light: "#c3fffa",
          container: "#00f0e8",
        },
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#e8bcbd",
        outline: "#ae8789",
        error: "#ffb4ab",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      borderRadius: {
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      spacing: {
        gutter: "24px",
      },
      maxWidth: {
        container: "1100px",
      },
      boxShadow: {
        "primary-glow": "0 0 20px rgba(255, 0, 80, 0.3)",
        "secondary-glow": "0 0 20px rgba(0, 242, 234, 0.3)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #ff0050 0%, #ff516a 100%)",
        "gradient-velocity": "linear-gradient(90deg, #00f2ea 0%, #ff0050 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
