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
    // Border colors
    'border-blue-500',
    'border-red-500',
    'border-green-500',
    'border-purple-500',
    'border-yellow-500',
    'border-orange-500',
    'border-gray-500',
    
    // Text colors
    'text-blue-600',
    'text-red-600',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
    'text-orange-600',
    'text-gray-600',
    'text-blue-500',
    'text-red-500',
    'text-green-500',
    'text-purple-500',
    'text-yellow-500',
    'text-orange-500',
    'text-gray-500',
    'text-blue-400',
    'text-red-400',
    'text-green-400',
    'text-purple-400',
    'text-yellow-400',
    'text-orange-400',
    'text-gray-400',
    'text-blue-300',
    'text-red-300',
    'text-green-300',
    'text-purple-300',
    'text-yellow-300',
    'text-orange-300',
    'text-gray-300',
    'text-red-800',
    'text-orange-800',
    'text-yellow-800',
    'text-blue-800',
    'text-gray-800',
    
    // Background colors
    'bg-red-100',
    'bg-orange-100',
    'bg-yellow-100',
    'bg-blue-100',
    'bg-gray-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-red-500/20',
    'bg-green-500/20',
    'bg-yellow-500/20',
    'bg-blue-500/20',
    'bg-purple-500/20',
    'bg-orange-500/20',
    'bg-gray-200',
    
    // Additional utility classes
    'hover:bg-purple-800/50',
    'animate-pulse'
  ]
}
