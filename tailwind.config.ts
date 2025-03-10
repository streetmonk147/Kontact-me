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
        // Brand colors from Context.md
        primary: {
          DEFAULT: "#D35400", // Deep Orange
          light: "#E67E22",   // Lighter Orange
          dark: "#A04000",    // Darker Orange
        },
        secondary: {
          DEFAULT: "#2C3E50", // Navy Blue
          light: "#34495E",   // Lighter Navy
          dark: "#1A2530",    // Darker Navy
        },
        accent: {
          gold: "#F1C40F",    // Gold
          earth: "#8D6E63",   // Earth Tone
          green: "#27AE60",   // Forest Green
        },
        text: {
          dark: "#1E272E",    // Dark Text
          light: "#F5F5F5",   // Light Text
          muted: "#95A5A6",   // Muted Text
        },
        background: {
          DEFAULT: "#FFFFFF", // Background White
          alt: "#F9F9F9",     // Alternate Background
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
      },
      spacing: {
        xs: "0.25rem",   // 4px
        sm: "0.5rem",    // 8px
        md: "1rem",      // 16px
        lg: "2rem",      // 32px
        xl: "4rem",      // 64px
        xxl: "8rem",     // 128px
      },
      borderRadius: {
        sm: "0.25rem",   // 4px
        md: "0.5rem",    // 8px
        lg: "1rem",      // 16px
        full: "9999px",  // Full round
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0, 0, 0, 0.05)",
        md: "0 4px 8px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
        xl: "0 12px 24px rgba(0, 0, 0, 0.15)",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.5s ease-in-out forwards",
        "slide-left": "slideLeft 0.5s ease-in-out forwards",
        "slide-right": "slideRight 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
