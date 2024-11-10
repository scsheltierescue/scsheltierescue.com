import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'scsr-logo-c': {
          DEFAULT: '#2ba6cb',
        },
        'primary-c': {
          DEFAULT: '#008cba',
          darker: '#0078a0'
        },
        'error-c': {
          DEFAULT: '#f04124',
          darker: '#de2d0f'
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}