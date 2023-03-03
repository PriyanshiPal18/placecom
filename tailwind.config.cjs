/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				'layerone-pink-one': '#F56EB3',
				'layerone-pink-two': '#CB1C8D',
				'layerone-pink-three': '#7F167F',
				'layertwo-neon-one': '#D2F6C5',
				'layertwo-neon-two': '#99F3BD',
				'layertwo-neon-three': '#28DF99',
				'layerthree-violet-one': '#F0E3FF',
				'layerthree-violet-two': '#D89CF6',
				'layerthree-violet-three': '#916DD5'
			},
			fontFamily: {
				navbar: ['Open Sans'],
				homecover: ["'Bebas Neue'"]
			}
		}
	},
	plugins: []
}
