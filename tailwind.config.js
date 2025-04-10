/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


export default {
  theme: {
    extend: {
      backgroundImage: {
        'custom-diagonal': "linear-gradient(150deg, #FFF9E6 50%, #FDF5D9 50%)",
      },
    },
  },
  plugins: [],
}

