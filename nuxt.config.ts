// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui'],
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
});
