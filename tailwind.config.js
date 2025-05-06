/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-100': 'var(--color-bg-100)',
        'bg-200': 'var(--color-bg-200)',
        'bg-300': 'var(--color-bg-300)',
        'bg-400': 'var(--color-bg-400)',
        'bg-500': 'var(--color-bg-500)',
        'bg-600': 'var(--color-bg-600)',
        'bg-700': 'var(--color-bg-700)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        arabic: ['AdobeArabic', 'sans-serif'],
        kunkun: ['KunkunArabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};