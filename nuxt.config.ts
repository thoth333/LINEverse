export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', '@vite-pwa/nuxt'],
	devtools: { enabled: true },
	app: {
		head: {
			title: 'LINEverse',
			htmlAttrs: { lang: 'ja' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'theme-color', content: '#627898', media: '(prefers-color-scheme: light)' },
				{ name: 'theme-color', content: '#111111', media: '(prefers-color-scheme: dark)' },
			],
		},
	},
	css: ['~/assets/css/main.css'],
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'LINEverse',
			short_name: 'LINEverse',
			description: 'LINEのトーク履歴を相手側から閲覧するためのWebアプリケーション',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#ffffff',
			icons: [
				{ src: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
				{ src: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
			],
		},
		workbox: {
			navigateFallback: null,
			// よく分かってない…
		},
	},
});
