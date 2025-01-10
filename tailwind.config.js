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
      backgroundImage: theme => ({
        'grdBudget': 'linear-gradient(0deg, #2B263D, #AF64A9)',
        'grdMenus': 'linear-gradient(45deg, #0A122A, #0B3861)',
        'grdSubMenus': 'linear-gradient(45deg, #0B3861, #084B8A)',
        'grdFooter': 'linear-gradient(45deg, #F2F2F2, #BDBDBD) ',
      }),  
    },
  },
  plugins: [],
};

