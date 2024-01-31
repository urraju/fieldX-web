/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        BackGround_one : "url('https://i.ibb.co/cJJ6FFH/back-Ground-Img.png')",
        BackGround_two : "url('https://i.ibb.co/nr4wHgs/ajscb-1.png')",
        BackGround_three : "url('https://i.ibb.co/XS2g8h0/Frame.png')"
      },
      fontFamily : {
        manrope : "'Manrope', sans-serif;"
      },
      maxWidth : {
        "1400" : '1400px',
      }
    },
  },
  plugins: [],
}
