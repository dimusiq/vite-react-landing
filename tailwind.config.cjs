/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			xl: '1920px',
			lg: '1024px',
			md: '768px',
			sm: '320px',
		},
	},
	plugins: [],
};
