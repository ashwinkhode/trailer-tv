module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      thumbnailCard: '0 -2px 10px rgba(0,0,0,0.6)',
      sidenav: '2px 0px 10px rgba(0,0,0,0.6)',
    },
    extend: {
      fontFamily: {
        block: ['Rubik', 'Montserrat', 'Roboto'],
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: (theme) => ({
        default: "url('/public/assets/netflix.jpeg')",
        badboys: "url('/public/assets/badboys.jpeg')",
        nobody: "url('/public/assets/nobody.jpeg')",
        coming2america: "url('/public/assets/coming2america.jpeg')",
        loki: "url('/public/assets/loki.jpeg')",
        falcon: "url('/public/assets/falcon.jpeg')",
        jack: "url('/public/assets/jack.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
