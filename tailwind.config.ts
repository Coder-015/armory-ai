import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#F1F6F4", // Arctic Powder
          secondary: "#D9E8E2", // Mystic Mint
          dark: "#114C5A", // Nocturnal Expedition
        },
        brand: {
          primary: "#FFC801", // Forsythia
          secondary: "#FF9932", // Deep Saffron
        },
        text: {
          primary: "#172B36", // Oceanic Noir
          secondary: "#114C5A", // Nocturnal Expedition
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
