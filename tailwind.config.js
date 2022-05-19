module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      white: '#FFFFFF',
      gray: '#9e9e9d',
      grayDark: '#63635f',
      grayLight: '#d7d7d9',
      yellow: '#fae596',
      mustard: '#a17602',
      green: '#3fb0ac',
      blue: '#173e43',
    },

    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      adelia: ['ADELIA', 'cursive'],
    },

    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },

  plugins: [],
};
