/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // google fonts
      fontFamily: {
        nova: ["Nova Mono", "serif"],
        dynapuff: ["DynaPuff", "serif"],
        roboto: ["Roboto", "serif"],
        caveat: ["Caveat", 'serif'],
      },

      // container:{
      //   center: true
      // }
    },
  },
  plugins: [],
};
