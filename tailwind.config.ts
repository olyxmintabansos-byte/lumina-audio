import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      obsidian: "#0a0a0c",
      bronze: "#c59b27",
      ivory: "#f4f4f5",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        900: "#111827",
      },
    },
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
