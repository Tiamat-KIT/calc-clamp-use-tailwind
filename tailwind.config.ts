import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/dist/transformer.js"
;
const config: Config = withTV({
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
        "flower": "url('/sakura.jpg')",
      },
    },
  },
  plugins: [],
});
export default config;
