import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      "360" : "360px",
      "480" : "480px",
      "sm" : "576px",
      "md" : "768px",
      "lg" : "1024px",
      "xs" : "1536px"
    },
    container  :{
      screens : {
        "360" : "100%",
        "480" : "100%",
        "sm" : "100%",
        "md" : "100%",
        "lg" : "100%",
        "xs" : "1140px"
      },
      center : true,
      padding : 20
      
    },
    extend: {},
  },
  plugins: [
    plugin(function( {addUtilities, addComponents, theme} ){
      addComponents({
        ".h2": {
          fontSize : 50,
          fontWeight : 700,
          color : "white",
        } 
      });
      addUtilities({
        ".white-shadow": {
          boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
        }
      })
    })
  ],

}