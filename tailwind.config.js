/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			{
				mytheme: {
					primary: '#b89260',
					secondary: '#171612',
					'base-100': '#FCFCFC'
				}
			}
		]
	}
};
