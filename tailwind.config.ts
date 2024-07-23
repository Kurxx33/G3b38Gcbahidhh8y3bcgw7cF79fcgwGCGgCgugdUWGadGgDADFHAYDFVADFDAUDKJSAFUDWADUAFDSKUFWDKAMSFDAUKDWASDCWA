// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'krush-black': '#0A0A0A',
        'krush-white': '#F5F5F5',
        'krush-grey': '#1C1C1C',
        'opium-black': '#0D0D0D',
        'opium-white': '#E5E5E5',
        'opium-grey': '#2E2E2E',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'white-glow': '0 0 10px rgba(255, 255, 255, 0.5)',
        'white-glow-fade': '0 0 10px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: theme => ({
        'scanlines': 'url(/path/to/scanlines.png)',
        'low-poly': 'url(/path/to/low-poly.png)',
      }),
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-out': 'fadeOut 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      backgroundColor: ['active'],
      borderColor: ['focus', 'active'],
      textColor: ['focus', 'active'],
      display: ['hover', 'focus'],
      opacity: ['dark'],
    },
  },
  plugins: [],
}
