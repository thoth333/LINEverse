// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', '@vite-pwa/nuxt'],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				// ...
			},
		} },
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'LINEverse',
			short_name: 'LINEverse',
			start_url: '/',
			display: 'standalone',
			background_color: '#e77777',
			theme_color: '#e77777',
			icons: [
				{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
				{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
			],
		},
	},
});
