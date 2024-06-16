export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend:{
          colors: {
              'primary' : '#2f3640',
              'primary-lighter': '#353b48',
              'secondary-lighter' : '#ff5329',
              'secondary' : '#e84118',
              'secondary-darker': '#c23616',
              'border': '#718093',
              'font' : '#f5f6fa'
          },
          keyframes: {
              roll: {
                  '0%': { transform: 'translateY(0)' },
                  '100%': { transform: 'translateY(-100%)' },
              },
          },
          animation: {
              roll: 'roll 1s ease-in-out infinite',
          },
      }
  },
  plugins: [],
}