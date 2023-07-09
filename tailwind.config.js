// eslint-disable-next-line @typescript-eslint/no-var-requires
// const customThemes = require('./themes/customThemes');
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    screens: {
      xs: '475px',
      // ...defaultTheme.screens,
    },
    // extend: customThemes,
  },
  variants: {},
  plugins: [],
};
