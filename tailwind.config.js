/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
          colors: {
                background: "#FDFDFD",
                textcol: "#434343",
                primary: "#E6AF2E",
                secondary: "#9381FF",
                accent: "#FF36AB"
            }
        }
	},
	plugins: [require('@tailwindcss/typography')],
};
