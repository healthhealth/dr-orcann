/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['Inter', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'], // Substitua 'Inter' pela fonte serifada desejada, se não for a Inter
      },
      backgroundImage: {
        'quadriculado': " <img src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/02/fundo-quadriculado-png-transparente4.png?resize=768%2C576&ssl=1">", // Substitua pelo caminho da imagem do quadriculado
      },
    },
  },
  plugins: [],
};
