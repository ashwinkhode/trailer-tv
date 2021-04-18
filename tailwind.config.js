module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
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
      backgroundImage: theme => ({
        'default': "url('/src/assets/netflix.jpg')",
        'badboys': "url('/src/assets/badboys.jpg')",
        'nobody': "url('/src/assets/nobody.jpg')",
        'coming2america': "url('/src/assets/coming2america.jpg')",
        'loki': "url('/src/assets/loki.jpg')",
        'falcon': "url('/src/assets/falcon.jpg')",
        'jack': "url('/src/assets/jack.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
