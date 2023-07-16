/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  content: [
    './*.{html,js}',

  ],
  theme: {
    extend: {
      colors: {
        "primary" :"#103141",
        "primary-light" : "#b1dbef",
        "primary-dark" : "#010417",
        "secondary" : "#2896b2",
        "cl-gray" : "#333",
        "cl-white" : "#fff",
        "cl-blob" : "#A427DF",
        "hover-secndary" : "#258ba6",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
    },
   
  },
  plugins: [rotateY],
}

