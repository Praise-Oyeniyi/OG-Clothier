/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {    
      keyframes: {
        wiggle: {
          '0%, 100%': { left: '-35%'},
          '55%': { left: '-45%' },
          '70%, 75%':{left: '-65%'},
          '90%':{left: '-15%'}
        },
        wiggletwo: {
          '0%, 100%': { right: '-25%'},
          '55%': { right: '-9%' },
          '70%, 75%':{right: '0%'},
          '90%':{right: '-35%'}
        },
        discover:{
          "0%, 100%":{scale:'1'},
          "50%":{scale:'1.2'},
          "90%":{scale:'1.1'},
        },
        top:{
          "0%":{position:'absolute', top:'-100',opacity:'0'},
          "25%":{position:'relative', visibility:'visible', opacity:'1'},
          "26%, 100%":{position:'absolute', top:'-100',opacity:'0'},
        },
        middle:{
          "0%":{position:'absolute', top:'-100',opacity:'0'},
          "50%":{position:'relative', visibility:'visible', opacity:'1'},
          "51%, 100%":{position:'absolute', top:'-100',opacity:'0'},
        },
        bottom:{
          "0%":{position:'absolute', top:'-100',opacity:'0'},
          "75%":{position:'relative', visibility:'visible', opacity:'1'},
          "76%, 100%":{position:'absolute', top:'-100',opacity:'0'},
        }
        
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
        wiggletwo: 'wiggletwo 5s ease-in-out infinite',
        discover: 'discover 3s ease-in infinite',
        top: 'top 5s ease-in infinite',
        middle: 'middle 5s ease-in infinite',
        bottom: 'bottom 5s ease-in infinite'
      }
    },
    colors: {
      'l-black':'#050505',
      'white':'#fff',
      'image-bg':'#F0F1F1',
      'c-image-after':'rgba(0, 0, 0, 0.30)',
      'c-image-afterr':'rgba(0, 0, 0, 0.74)',
    },
  },
  plugins: [],
}