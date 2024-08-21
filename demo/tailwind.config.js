// tailwind.config.js

const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const safelist = [];

colors.forEach(color => {
  shades.forEach(shade => {
    safelist.push(`bg-${color}-${shade}`);
    safelist.push(`hover:bg-${color}-${shade}`);
  });
});

module.exports = {
  content: [
    '/index.tsx', // Adjust the paths as necessary
    '/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: safelist
};
