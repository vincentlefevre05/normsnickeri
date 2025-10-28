import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom 14-column grid system from TypeFive analysis
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
      },
      // Custom spacing scale for construction industry layout
      spacing: {
        '18': '4.5rem',   // 72px
        '72': '18rem',    // 288px  
        '84': '21rem',    // 336px
        '96': '24rem',    // 384px
      },
      // Typography scale based on TypeFive analysis
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Color system adapted for construction industry
      colors: {
        // TypeFive-inspired background
        cream: {
          50: '#fffbfa',
          100: '#fef7f5',
        },
        // Construction industry colors
        construction: {
          orange: '#ff6b35',
          blue: '#004e89',
          gray: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#212529',
            900: '#0d1117',
          },
        },
        // Professional neutral palette
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      // Animation timing based on TypeFive analysis
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionDelay: {
        '400': '400ms',
      },
      // Custom font family for construction industry
      fontFamily: {
        sans: [
          'var(--font-source-sans)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: [
          'var(--font-lora)',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        display: [
          'var(--font-lora)',
          'Georgia',
          'serif',
        ],
      },
      // Custom breakpoints for construction website
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1728px',
      },
      // Animation utilities
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'stagger-fade': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'stagger-fade': 'stagger-fade 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    // Add custom utilities for construction industry
    function({ addUtilities }: any) {
      const newUtilities = {
        '.grid-14': {
          'grid-template-columns': 'repeat(14, minmax(0, 1fr))',
        },
        '.col-span-14': {
          'grid-column': 'span 14 / span 14',
        },
        '.construction-shadow': {
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config