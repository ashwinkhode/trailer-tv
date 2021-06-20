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
        default: "url('/public/assets/netflix.jpg')",
        badboys: "url('/public/assets/badboys.jpg')",
        nobody: "url('/public/assets/nobody.jpg')",
        coming2america: "url('/public/assets/coming2america.jpg')",
        loki: "url('/public/assets/loki.jpg')",
        falcon: "url('/public/assets/falcon.jpg')",
        jack: "url('/public/assets/jack.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
