const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'slate'];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const safelist = [];

const nonShadeColors = ['black', 'white'];

nonShadeColors.forEach(color => {
  safelist.push(`bg-${color}`);
  safelist.push(`hover:bg-${color}`);
  safelist.push(`text-${color}`);
  safelist.push(`hover:text-${color}`);
  safelist.push(`border-${color}`);
  safelist.push(`hover:border-${color}`);
});

colors.forEach(color => {
  shades.forEach(shade => {
    safelist.push(`bg-${color}-${shade}`);
    safelist.push(`hover:bg-${color}-${shade}`);
    safelist.push(`text-${color}-${shade}`);
    safelist.push(`hover:text-${color}-${shade}`);
    safelist.push(`border-${color}-${shade}`);
    safelist.push(`hover:border-${color}-${shade}`);
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to your file types and locations,
    './demo/index.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: safelist
};
