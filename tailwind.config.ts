import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: { min: "50px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px", max: "1279px" },
      large: { min: "1280px", max: "1535px" },
      xtraLarge: { min: "1536px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
