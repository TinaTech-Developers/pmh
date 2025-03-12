module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'before:content-[""]', // explicitly safelisting dynamic content classes
    "before:absolute",
    "before:left-0",
    "before:top-0",
    "before:-z-10",
    "before:h-full",
    "before:w-full",
    "before:origin-top-left",
    "before:scale-x-0",
    "before:bg-blue-950",
    "before:transition-all",
    "before:duration-300",
    'before:content-[""]',
    "hover:before:scale-x-100",
    // Add any other dynamic classes here that might get purged
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
