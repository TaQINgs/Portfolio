import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Light Mode Palette ── */
        background: "#eeeee8",
        "on-background": "#1a1a1a",
        surface: "#f5f5f0",
        "on-surface": "#1a1a1a",
        "surface-variant": "#e0e0d8",
        "on-surface-variant": "#5a6355",
        "surface-container": "#ffffff",
        "surface-container-low": "#f0f0ea",
        "surface-container-high": "#e8e8e2",
        "surface-container-highest": "#dededa",
        "surface-container-lowest": "#fafaf5",
        "surface-bright": "#ffffff",
        "surface-dim": "#dcdcd6",
        "surface-tint": "#3aab52",
        /* greens */
        primary: "#3aab52",
        "primary-fixed": "#b8f5c4",
        "primary-fixed-dim": "#3aab52",
        "primary-container": "#3aab52",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#002107",
        "on-primary-fixed-variant": "#00531d",
        "on-primary-container": "#003912",
        "inverse-primary": "#77fd8c",
        /* secondary */
        secondary: "#5a6355",
        "secondary-fixed": "#dce8d5",
        "secondary-fixed-dim": "#bfc9ba",
        "secondary-container": "#dde8d6",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#1a1e1a",
        "on-secondary-fixed-variant": "#3a4438",
        "on-secondary-container": "#192018",
        /* tertiary */
        tertiary: "#7a4526",
        "tertiary-container": "#ffdbca",
        "tertiary-fixed": "#ffdbca",
        "tertiary-fixed-dim": "#ffb68f",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#331200",
        "on-tertiary-fixed-variant": "#6c3a1c",
        "on-tertiary-container": "#5a2e12",
        /* error */
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#410002",
        /* outline */
        outline: "#73796e",
        "outline-variant": "#c2c9bc",
        /* inverse */
        "inverse-surface": "#2e312d",
        "inverse-on-surface": "#f0f1eb",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        "left-panel-width": "396px",
        "left-panel-width-lg": "516px",
        "stack-md": "24px",
        "stack-sm": "8px",
        "container-padding": "64px",
        "stack-lg": "48px",
        gutter: "32px",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
        geist: ["Geist", "sans-serif"],
      },
      fontSize: {
        "headline-lg-mobile": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "body-md": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "display-lg": [
          "80px",
          { lineHeight: "90px", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
