/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          lora: ['var(--font-lora)', 'serif'],
          'cursive': ['"Great Vibes"', 'cursive'],
        },
        colors: {
          brand: {
            green: '#047857', // Tailwind green-700
            black: '#1F2937', // Tailwind gray-800
          },
        },
        animation: {
          blob: "blob 7s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "translate(0px, 0px) scale(1)",
            },
          },
        },
      },
    },
    // other configurations
  };

  