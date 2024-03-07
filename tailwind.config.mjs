/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-black': '#252e46',
				'secondary-white': '#c7c7c7',
				'primary-blue': '#3a4e7a',
				'secondary-blue': '#3e558f',
				'tertiary-blue': '#4767ae',
				'light-blue': '#82aed8',
			  },
			backgroundImage: {
				"hero-pattern": "url('/mosaic.png')",
			  },
		},
	},
	plugins: [],
}
