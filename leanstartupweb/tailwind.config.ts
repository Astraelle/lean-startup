import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs spécifiques de la maquette Kollab
        'kollab': {
          'green': '#10B981',      // Vert principal Kollab
          'green-light': '#34D399', // Vert clair pour les hovers
          'green-dark': '#059669',   // Vert foncé
          'orange': '#F59E0B',      // Orange principal Kollab
          'orange-light': '#FBBF24', // Orange clair pour les hovers
          'orange-dark': '#D97706',  // Orange foncé
          'black': '#000000',       // Noir principal
          'gray-light': '#F3F4F6',  // Gris clair pour les backgrounds
          'gray-medium': '#D1D5DB', // Gris moyen pour les placeholders
          'white': '#FFFFFF',       // Blanc pur
          // Nouvelles couleurs du design Figma
          'dark-gray': '#1A1B19',   // Couleur de bordure principale du design Figma
        }
      },
      fontFamily: {
        // Police principale du design Figma
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
