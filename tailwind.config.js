/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'serif'], // Adicione sua fonte
      },
      backgroundImage: {
        'budget': "url('/src/assets/budget.jpg')",
        'banner': "url('/src/assets/banner.jpg')",
        'pc': "url('/src/assets/pc.png')",
      },
    },
  },
  plugins: [],
};

