/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Kameron'
      },
      backgroundImage: {
        'Background-login': "url('../assets/images/LoginBackground.png')",
      }
    },
  },
  plugins: [],
}
