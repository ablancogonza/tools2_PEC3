/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'verdoso': 'color(display-p3 .95 .95 .9)',
      'azul': 'rgb(13,110,253)',
      'botonMenu': 'rgba(0,0,0,0.25)',
      'grisOscuro': 'rgba(0,0,0,0.7)',
      'deshabilitado': 'rgba(0,0,0,0.2)',
      'blanco': '#ffffff',
    },
    screens: {
      'xs': '500px',
      'sm': '540px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    fontSize: {
      '2xl': '1.2rem',
      'cqw3': '3cqw',
      'cqw4': '4cqw',
      'cqw5': '5cqw',
      '3xl': '30px',
      '4xl': '39px'
    },
    extend: {
      width: {
        'chef-w': '300px'
      },
      height: {
        'chef-h': '300px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

