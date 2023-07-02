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
				grey: '0 5px 4px rgba(0,0,0,.4) ',
				white: '0 5px 4px rgba(0,0,0,.5) ',
				black: '0 4px 4px rgba(0,0,0,.8) ',
				figcaption: '0 4px 2px rgba(0,0,0,.8) ',
			},
			minHeight: {
				60: '40vh',
			},
		},
	},
	plugins: [],
};
