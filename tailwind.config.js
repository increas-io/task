module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "3xl": "28px",
        "8xl": "92px",
      },
      colors: {
        gray: {
          300: "#878787",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
