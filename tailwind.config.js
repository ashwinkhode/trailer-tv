module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      thumbnailCard: '0 -2px 10px rgba(0,0,0,0.6)'
    },
    extend: {
      fontFamily: {
        block: ['Rubik', 'Montserrat', 'Roboto'],
      },
      backgroundImage: theme => ({
        'layout-image': "url('/src/assets/badboys.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
