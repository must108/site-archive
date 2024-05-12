import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black-1': '#09090B',
				'button-color': '#222224',
				'white': '#FFFFFF',
        'github': '#222224',
        'python': '#3572A5',
        'typescript': '#3178C6',
        'jupyter': '#DA5B0B',
        'java': '#B07219',
        'r': '#198CE7',
      }
    },
  },
  plugins: [],
};
export default config;
