/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 適当につけた色名です
        'regal-blue': '#4D8DA9',
        'text-color': '#C1E1EE',
        'haiiro': '#333333',

        // カラースタイル
        'yellow-pale': '#F5DFA4',
        'yellow-dark': '#D7A117',
        'blue-pale': '#C1E1EE',
        'blue-dark': '#4D8DA9',
        'red-pale': '#FFCACA',
        'red-dark': '#B43E3E',
        'green-pale': '#87B7A5',
        'green-dark': '#6C9575',
      },
    },
  },
  plugins: [],
};