/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
  fontFamily: {
    primary: ["var(--font-roboto)", "sans-serif"],
    secondary: ["var(--font-inter)", "sans-serif"],
  },
   colors: {
        primary: "var(--primary)",
        text: "var(--text)",
        border: "var(--top-border)",
      },
},
  },
  plugins: [],
};
