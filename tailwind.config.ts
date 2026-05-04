import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#022f4d",
          deep: "#01416d",
          green: "#055425",
          rose: "#c46780",
          pink: "#ec5d8a",
          ig: "#c13584",
          accent: "#ffd84d",
        },
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
