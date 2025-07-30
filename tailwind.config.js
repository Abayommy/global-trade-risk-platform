/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'border-blue-500',
    'border-red-500',
    'border-green-500',
    'border-purple-500',
    'border-yellow-500',
    'text-blue-600',
    'text-red-600',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
    'text-blue-500',
    'text-red-500',
    'text-green-500',
    'text-purple-500',
    'text-yellow-500'
  ]
}
