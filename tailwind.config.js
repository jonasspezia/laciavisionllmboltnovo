/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // LaciaVisionLLM
        'turquesa': '#15bcc6',
        'verde': '#46c68f',
        'azul-escuro': '#002046',
        'cinza-claro': '#d4d4d4',
        'branco-suave': '#f2f2f2',
        'azul-profundo': '#022340',
        
        // Teledoc Journey Medical
        'dourado': '#c69a29',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(21, 188, 198, 0.3)',
        'glow': '0 0 15px rgba(21, 188, 198, 0.4)',
        'glow-lg': '0 0 25px rgba(21, 188, 198, 0.5)',
        'glow-verde': '0 0 15px rgba(70, 198, 143, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'pulse-fast': 'pulse 1.5s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--turquesa) 0%, var(--verde) 100%)',
        'gradient-dark': 'linear-gradient(135deg, var(--azul-escuro) 0%, var(--azul-profundo) 100%)',
      }
    },
  },
  plugins: [],
}
