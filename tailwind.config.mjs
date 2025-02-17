/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#e9a033',
        red: '#992933',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
