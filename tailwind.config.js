/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ec1: '#618264', 
        ec2: '#79AC78',
        ec3: '#B0D9B1',
        ec4: '#D0E7D2',
        ec5: '#000080'
      },
      screens: {
        'custom-sm': {'max:': '460px'}, 
        'custom-md': {'max:': '768px'},  
        'custom-lg': {'max:': '1024px'}, 
      },
    },
  },
  plugins: [],
}


