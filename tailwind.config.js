/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'rojo-itc': '#CC2D4A',
        'verde-itc': '#8FA206',
        'azul-itc': '#61AEC9'
      }),
      textColor: {
        'rojo-itc': '#CC2D4A',
        'verde-itc': '#8FA206',
        'azul-itc': '#61AEC9' 
      },

      backgroundImage:{
        'fondo': 'url(https://i.postimg.cc/6qBRbHpr/Cataratas-FONDO.jpg)',
        'cafayate': 'url(https://i.postimg.cc/kMxJ8QVk/Cafayate.jpg)',
        'choele-choel': 'url(https://i.postimg.cc/x1FnYg7b/Choele-Choel.jpg)',
        'calafate': 'url(https://i.postimg.cc/Gp8rpGwg/Calafate.jpg)',
        'bariloche': 'url(https://i.postimg.cc/vZmbpCPs/Bariloche.jpg)',
      },
      
      },
    },
    fontFamily: {
      Montserrat: [ 'Montserrat', 'sans-serif'],
    }
  }
  plugins: []


