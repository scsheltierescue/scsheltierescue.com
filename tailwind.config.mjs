import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // boxShadow: {
      //   'inner-strong': 'inset 0 0 3px rgba(51 51 51 / 0.5)',
      // },
      colors: {
        'scsr-logo-c': {
          DEFAULT: 'var(--scsr-logo-c)',
        },
        'primary-c': {
          DEFAULT: 'var(--scsr-primary-c)',
          darker: 'var(--scsr-primary-c-darker)',
        },
        'error-c': {
          DEFAULT: 'var(--scsr-error-c)',
          darker: 'var(--scsr-error-c-darker)',
        },
        'selection-c': {
          DEFAULT: 'var(--scsr-selection-c)',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'Roboto', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '476px', // 29.75em
        md: '769px', // 48.063em
        lg: '940px', // 58.75em
        xl: '1281px', // 80.063em
        '2xl': '1441px', //90.063em
      },
    },
  },
  plugins: [],
}