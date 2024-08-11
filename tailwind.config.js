module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent1: 'var(--color-accent1)',
        accent2: 'var(--color-accent2)',
        accent3: 'var(--color-accent3)',
        accent4: 'var(--color-accent4)',
        accent5: 'var(--color-accent5)',
      },
      fontFamily: {
        mono: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};
