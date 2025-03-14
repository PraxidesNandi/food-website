/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Scans all HTML and JS/TS files in src folder
    "./public/index.html", // Ensures Tailwind works in public HTML files
  ],
  theme: {
    extend: {
      colors:{
        accent: '#179957',
        accentDark: '#184D47',
      },
      container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
};
