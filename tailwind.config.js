/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-off-white': 'rgb(231, 254, 255)',
        'tulip-background': 'rgb(231,254,255)',
        'tulip-foreground': 'rgb(82,178,195)'
      },
    },
  },
  plugins: [],
}

