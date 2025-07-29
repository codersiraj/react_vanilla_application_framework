module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
          'hrms-primary': '#1A365D',
          'hrms-accent': '#ED8936', // Optional or gold-ish: '#ECC94B'
          'hrms-background': '#F7FAFC',
          'hrms-sidebar': '#1A365D',
          'hrms-text-primary': '#2D3748',
          'hrms-hover': '#ffa94d'
      },
    },
  },
  plugins: [],
};