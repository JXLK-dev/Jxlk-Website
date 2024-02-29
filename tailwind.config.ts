import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slowFloating: {
          "0%": {
            transform: " translate(0px,0px)",
            backgroundColor: "white",
            color: "black",
          },
          "20%": { transform: " translate(0px,-7px)" },
          "40%": {
            transform: " translate(0px,-4px)",
            backgroundColor: "black",
            color: "white",
          },
          "70%": { transform: " translate(0px,-10px)" },
          "100%": {
            transform: " translate(0px,0px)",
            backgroundColor: "white",
            color: "black",
          },
        },
        slowfloating: {
          "0%": {
            transform: " translate(0px,0px)",
          },
          "20%": { transform: " translate(0px,-7px)" },
          "40%": {
            transform: " translate(0px,-4px)",
          },
          "70%": { transform: " translate(0px,-10px)" },
          "100%": {
            transform: " translate(0px,0px)",
          },
        },
        exitFloating: {
          "0%": { transform: "translate(0px,0px)", borderWidth: "3px" },
          "15%": { borderWidth: "0px" },
          "50%": { transform: "translate(0px,10px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        blinking: {
          "0%": { backgroundColor: "white", color: "black" },
          "50%": { backgroundColor: "black", color: "white" },
          "100%": { backgroundColor: "white", color: "black" },
        },
      },
      animation: {
        blinking: "blinking 2s transition infinite",
        floating: "slowFloating 3s transition infinite",
        slowfloating: "slowFloating 3s transition infinite",
        exitFloating: "exitFloating 2s transition",
      },
    },
  },
  plugins: [],
};
export default config;
