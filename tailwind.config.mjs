import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}