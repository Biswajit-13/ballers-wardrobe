/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],//#52616B
  theme: {
    extend: {
      colors: {
        bg: '#F5F5F5',
        act: '#82B2B8',
        subhd:'#98B8A3',
        txt: '#202A38',
        hd:'#6D9FA5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}