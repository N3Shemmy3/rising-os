/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./assets/**/*.{vue,js,css}",
		"./components/**/*.{vue,js}",
		"./layOuts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
			},
			animation: {
				"fade-in": "fade-in 0.5s ease-in-Out",
			},
			backgroundImage: {
				'bg-pattern': "url('/png/background.png')",
				'footer-texture': "url('/img/footer-texture.png')",
			},
			colors: {
				colorAccent: "#FF7373",
				colorOnAccent: "#FAFAFA",
				colorError: "#ffb4ab",
				colorOnError: "#690005",
				colorBackground: "#0F0F0F",
				colorOnBackground: "#FAFAFA",
				colorSurface: "#292929",
				colorOnSurface: "#FAFAFA",
				colorOutline: "#9a8f80",
				colorShadow: "#000000",

			},
		},
	},
}
