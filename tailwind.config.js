/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#083C2F',
        'bg-color': '#394649',
        'in-color': '#E7F874', 
      },
      fontFamily: {
				'font-sg': ['Space Grotesk', 'sans-serif'],
			},
    },
  },
  plugins: [],
}

