module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				ubuntu: 'Ubuntu',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
