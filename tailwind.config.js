const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
          colors: {
                background: "#FDFDFD",
                textcol: "#434343",
                primary: "#E6AF2E"
            }
        }
	},
	plugins: [require('@tailwindcss/typography')],
};
