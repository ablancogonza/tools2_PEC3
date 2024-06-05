/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'verdoso': 'color(display-p3 .95 .95 .9)',
      'azul': 'rgb(13,110,253)',
      'botonMenu': 'rgba(0,0,0,0.25)',
      'grisOscuro': 'rgba(0,0,0,0.7)'
    },
    screens: {
      'xs': '500px',
    },
    fontSize: {
      'cqw3': '3cqw',
      'cqw4': '4cqw',
      'cqw5': '5cqw',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

