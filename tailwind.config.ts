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
        /* All values reference CSS custom properties defined in globals.css.
           Switching the .dark class on <html> swaps the entire palette. */

        /* ── Core surfaces ── */
        background:                    "var(--color-background)",
        "on-background":               "var(--color-on-background)",
        surface:                       "var(--color-surface)",
        "on-surface":                  "var(--color-on-surface)",
        "surface-variant":             "var(--color-surface-variant)",
        "on-surface-variant":          "var(--color-on-surface-variant)",
        "surface-container":           "var(--color-surface-container)",
        "surface-container-low":       "var(--color-surface-container-low)",
        "surface-container-high":      "var(--color-surface-container-high)",
        "surface-container-highest":   "var(--color-surface-container-highest)",
        "surface-container-lowest":    "var(--color-surface-container-lowest)",
        "surface-bright":              "var(--color-surface-bright)",
        "surface-dim":                 "var(--color-surface-dim)",
        "surface-tint":                "var(--color-surface-tint)",

        /* ── Primary (green) ── */
        primary:                       "var(--color-primary)",
        "primary-fixed":               "var(--color-primary-fixed)",
        "primary-fixed-dim":           "var(--color-primary-fixed-dim)",
        "primary-container":           "var(--color-primary-container)",
        "on-primary":                  "var(--color-on-primary)",
        "on-primary-fixed":            "var(--color-on-primary-fixed)",
        "on-primary-fixed-variant":    "var(--color-on-primary-fixed-variant)",
        "on-primary-container":        "var(--color-on-primary-container)",
        "inverse-primary":             "var(--color-inverse-primary)",

        /* ── Secondary ── */
        secondary:                     "var(--color-secondary)",
        "secondary-fixed":             "var(--color-secondary-fixed)",
        "secondary-fixed-dim":         "var(--color-secondary-fixed-dim)",
        "secondary-container":         "var(--color-secondary-container)",
        "on-secondary":                "var(--color-on-secondary)",
        "on-secondary-fixed":          "var(--color-on-secondary-fixed)",
        "on-secondary-fixed-variant":  "var(--color-on-secondary-fixed-variant)",
        "on-secondary-container":      "var(--color-on-secondary-container)",

        /* ── Tertiary ── */
        tertiary:                      "var(--color-tertiary)",
        "tertiary-container":          "var(--color-tertiary-container)",
        "tertiary-fixed":              "var(--color-tertiary-fixed)",
        "tertiary-fixed-dim":          "var(--color-tertiary-fixed-dim)",
        "on-tertiary":                 "var(--color-on-tertiary)",
        "on-tertiary-fixed":           "var(--color-on-tertiary-fixed)",
        "on-tertiary-fixed-variant":   "var(--color-on-tertiary-fixed-variant)",
        "on-tertiary-container":       "var(--color-on-tertiary-container)",

        /* ── Error ── */
        error:                         "var(--color-error)",
        "error-container":             "var(--color-error-container)",
        "on-error":                    "var(--color-on-error)",
        "on-error-container":          "var(--color-on-error-container)",

        /* ── Outline ── */
        outline:                       "var(--color-outline)",
        "outline-variant":             "var(--color-outline-variant)",

        /* ── Inverse ── */
        "inverse-surface":             "var(--color-inverse-surface)",
        "inverse-on-surface":          "var(--color-inverse-on-surface)",
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
        "left-panel-width":    "396px",
        "left-panel-width-lg": "516px",
        "stack-md":            "24px",
        "stack-sm":            "8px",
        "container-padding":   "64px",
        "stack-lg":            "48px",
        gutter:                "32px",
      },
      fontFamily: {
        sans:    ["Hanken Grotesk", "sans-serif"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
        geist:   ["Geist", "sans-serif"],
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
