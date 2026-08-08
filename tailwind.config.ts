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
        "on-primary": "#003912",
        "surface-container": "#1f2020",
        "on-surface": "#e3e2e2",
        background: "#121414",
        "on-error": "#690005",
        "tertiary-fixed": "#ffdbca",
        "on-primary-fixed": "#002107",
        error: "#ffb4ab",
        "primary-fixed": "#77fd8c",
        "on-tertiary-fixed": "#331200",
        "on-secondary-fixed": "#1a1c1c",
        "error-container": "#93000a",
        "primary-container": "#59e073",
        "on-tertiary-fixed-variant": "#6c3a1c",
        "surface-container-lowest": "#0d0e0f",
        "surface-variant": "#343535",
        primary: "#77fd8c",
        "surface-container-low": "#1b1c1c",
        "on-secondary-container": "#b4b5b5",
        surface: "#121414",
        "on-secondary": "#2f3131",
        "on-tertiary-container": "#7a4526",
        "surface-container-highest": "#343535",
        "surface-bright": "#383939",
        "on-surface-variant": "#bccab9",
        "on-background": "#e3e2e2",
        outline: "#879484",
        "inverse-on-surface": "#303031",
        "tertiary-fixed-dim": "#ffb68f",
        "on-error-container": "#ffdad6",
        "on-tertiary": "#502408",
        secondary: "#c6c6c7",
        "outline-variant": "#3d4a3c",
        "secondary-fixed-dim": "#c6c6c7",
        "secondary-container": "#454747",
        "on-primary-fixed-variant": "#00531d",
        "surface-container-high": "#292a2a",
        "on-primary-container": "#006023",
        "surface-tint": "#59e073",
        "secondary-fixed": "#e2e2e2",
        "inverse-surface": "#e3e2e2",
        "primary-fixed-dim": "#59e073",
        "on-secondary-fixed-variant": "#454747",
        "surface-dim": "#121414",
        "tertiary-container": "#ffb68f",
        "inverse-primary": "#006e29",
        tertiary: "#ffdbca",
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
        "left-panel-width": "430px",
        "stack-md": "24px",
        "stack-sm": "8px",
        "container-padding": "64px",
        "stack-lg": "48px",
        gutter: "32px",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
        geist: ["Geist", "sans-serif"],
      },
      fontSize: {
        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],
        "body-md": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "headline-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "display-lg": [
          "80px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
