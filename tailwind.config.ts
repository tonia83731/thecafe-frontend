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
        light: "#FFFBF2",
        yellow: "#FFEFCD",
        orange: "#E09132",
        "orange-60": "rgb(224, 145, 50, .6)",
        latte: "#A68E74",
        olive: "#424530",
      },
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
