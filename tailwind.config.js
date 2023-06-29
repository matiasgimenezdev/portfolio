/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'grey-darkest': '#343A40',
				'grey-dark': '#495057',
				'grey-medium': '#6C757D',
				'grey-base': '#ADB5BD',
				'grey-light': '#CED4DA',
				'grey-lightest': '#DEE2E6',
				'white-high': '#E9ECEF',
				'white-medium': '#F8F9FA',
				'white-base': '#FFFFFF',
			},
			dropShadow: {
				'custom-grey': '0 2px 2px #495057',
			},
			minHeight: {
				60: '40vh',
			},
		},
	},
	plugins: [],
};
