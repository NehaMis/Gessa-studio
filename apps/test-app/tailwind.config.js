const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        12.4: '3.1rem',
      },
      height: {
        container2: 'calc(100vh - 6.5rem)',
        content: 'calc(100vh - 6.6rem)',
        'content-md': 'calc(100vh - 4.6rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
