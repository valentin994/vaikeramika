/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
          animation: {
        scroll: 'scroll 40s linear infinite',
          },
          keyframes: {
 scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
            },
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
