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
        "yellow-40": "rgb(255, 239, 205, .4)",
        "yellow-80": "rgb(255, 239, 205, .8)",
        orange: "#E09132",
        "orange-5": "rgb(224, 145, 50, .05)",
        "orange-60": "rgb(224, 145, 50, .6)",
        latte: "#A68E74",
        "latte-40": "rgb(166, 142, 116, .4)",
        "latte-60": "rgb(166, 142, 116, .6)",
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
