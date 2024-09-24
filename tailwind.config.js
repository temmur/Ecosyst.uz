/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',],
  theme: {
    container: {
      padding: '2rem',
      center: true,
      screens: ['1200px'],
    },
    theme: {
      extend: {},
    },
    plugins: [],
  }
}
