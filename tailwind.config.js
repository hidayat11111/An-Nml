
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    
    colors : {
      'lightGreen': '#e9edc9',
      'darkGreen' : '#ccd5ae',
      'DarkBlack' : '#16191c'
      
    },
    // screens: {
    //   'big': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },




    extend: {

   
      fontFamily: {
        customFont: ['"Mulish"', "sans-serif"],
       
      },

    },
  },
  plugins: [],
}