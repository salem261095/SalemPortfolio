/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['AdobeArabic','sans-serif' ],
        kunkun: ['KunkunArabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
