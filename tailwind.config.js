module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'hrms-primary': 'var(--hrms-primary)',
        'hrms-accent': 'var(--hrms-accent)',
        'hrms-background': 'var(--hrms-background)',
        'hrms-sidebar': 'var(--hrms-sidebar)',
        'hrms-text-primary': 'var(--hrms-text-primary)',
        'hrms-hover': 'var(--hrms-hover)',
        'hrms-buttontext': 'var(--hrms-buttontext)',
        'hrms-header': 'var(--hrms-header)',
      },
    },
  },
  plugins: [],
};