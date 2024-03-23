  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px', 
    },
    extend: {
      colors : {
        primary: '#1e40af',
        dark: '#0f172a',
        secondary:'#64748b', 
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}