// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Arquivos JavaScript e JSX do seu projeto React
    './public/index.html', // Se necessário, o arquivo index.html
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#3D898D', // Exemplo de cor secundária
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        jura: ['Jura', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
