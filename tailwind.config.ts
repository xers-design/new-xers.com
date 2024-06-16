import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/images/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        "xers-purple": "#8364FF",
        "xers-green": "#42C38D",
        "xers-blue": "#3E8DFF",
        "xers-cloudy-blue": "#E7EAF3",
        "xers-off-white": "#F7F8FB",
        "xers-off-black": "#1F1F1F",
      },
    },
  },
  plugins: [],
};
export default config;
