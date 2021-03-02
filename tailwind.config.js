/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        '10xl': '9rem',
      },
      backgroundColor: (theme) => ({
        'darkBlue': '#100E1D',
        'lightBlue': '#1E213A',
        'buttonIndigo':'#3C47E9',
      }),
      backgroundImage: (theme) => ({
        'cloud-pattern': "url('/src/assets/images/weatherIcons/Cloud-background.png')"
      }),
      padding: {
        11: '52px',
      },
    },
  },
  variants: {},
  plugins: [],
};
