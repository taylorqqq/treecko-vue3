/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html ", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-visibility": {
          visibility: "hidden",
        },
        ".no-opacity": {
          opacity: "0",
        },
        ".no-pointer-events": {
          pointerEvents: "none",
        },
        ".no-user-select": {
          userSelect: "none",
        },
        ".no-show": {
          display: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
