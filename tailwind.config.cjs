/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	theme: {
		extend: {},
		screens: {
			xl: '1920px',
			lg: '1770px',
			md: '1024px',
			sm: '768px',
			xs: '320px',
		},
	},
	plugins: [],
};
