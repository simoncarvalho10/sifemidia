/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'budget': "url('/assets/budget.jpg')",
        'banner': "url('/assets/banner.jpg')",
        'pc': "url('/assets/pc.png')",
      },
    },
  },
  plugins: [],
};

