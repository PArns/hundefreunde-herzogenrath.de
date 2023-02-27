/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: { fontSize: theme("fontSize.4xl") },
        h3: { fontSize: theme("fontSize.3xl") },
      });
    }),
  ],
};
