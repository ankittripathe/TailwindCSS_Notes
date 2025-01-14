/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //! color customization
      colors: {
        primary: "#416c2b",
      },

      //! breakpoint customization
      screens: {
        et: "600px",  // can add with unique name as well
        md: "800px",
        lg: "1100px",
        xl: "1200px",
      },

      //! spacig se sab me ban jaega margin, padding, height
      spacing: {
        21: "5.25rem",
        22: "5.5rem",
        13: "13px",
        "padd-15": "15px",
        "p-200": "200px",
        '100' : '100px'
      },

      // padding customization
      // padding: {
      //   21: "5.25rem",
      //   22: "5.5rem",
      //   13: "13px",
      //   "padd-15": "15px",
      // },

      // margin customization
      // margin: {
      //   21: "5.25rem",
      //   22: "5.5rem",
      //   13: "13px",
      // },

      // height customization
      // height: {
      //   31: "100px",
      //   myH: "200px",
      // },

      // weight customization
      // width: {
      //   myW: "200px",
      // },

      // container:{
      //   center: true
      // }
    },
  },
  plugins: [],
};
