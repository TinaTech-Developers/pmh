/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ with App directory
    "./pages/**/*.{js,ts,jsx,tsx}", // For traditional pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
