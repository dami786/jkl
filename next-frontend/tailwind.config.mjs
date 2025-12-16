/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22c55e",
          greenSoft: "#bbf7d0"
        }
      }
    }
  },
  plugins: []
};

export default config;


