/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['Georgia', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'], // Substitua 'Inter' pela fonte serifada desejada, se não for a Inter
      },
      backgroundImage: {
        'quadriculado': "url('/quadriculado.webp')", // Substitua pelo caminho da imagem do quadriculado
      },
      },
    },
  },
  plugins: [],
};
