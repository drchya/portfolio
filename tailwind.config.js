/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: {
          100: "#FFE1DB",
          200: "#FFC2B8",
          300: "#FFA494",
          400: "#FF8571",
          500: "#FF674D",
          600: "#CC341A",
          700: "#990100",
          800: "#660000",
          900: "#4D0000",
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

