/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00bfe6",
        "background-light": "#ffffff",
        "background-dark": "#09163e",
        "surface-dark": "#1A2F50", // Lighter navy for cards
        "text-muted": "#B5BFCA",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "sans": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1A2F50 1px, transparent 1px), linear-gradient(to bottom, #1A2F50 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
