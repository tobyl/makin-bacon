/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
      },
      colors: {
        "maroon": {
          50: "#FDDDDD",
          100: "#FCC0C0",
          200: "#F97C7C",
          300: "#F53D3D",
          400: "#E40B0B",
          500: "#A20808",
          600: "#830606",
          700: "#610505",
          800: "#3F0303",
          900: "#220202",
          950: "#0F0101"
        },
      }
    },
  },
  plugins: [],
}
