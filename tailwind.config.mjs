/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				text: 'Crimson Pro, Georgia, Times New Roman, Times, serif',
				title: 'Oswald, Verdana, Helvetica, Arial, sans-serif' 
			},
			colors: {
				primary: '#615648'
		}
		},
	},
	plugins: [],
}
