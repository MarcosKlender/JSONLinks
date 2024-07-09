import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			defaultLocale: 'en',
			title: 'JSONLinks',
			description: 'Start creating your own links page for free! A repository where you will find easy to implement links pages that fit your needs.',
			social: {
				github: 'https://github.com/MarcosKlender/JSONLinks',
			},
			sidebar: [
				{
					label: '🚀 Templates',
					link: '/templates',
					badge: { text: 'NEW', variant: 'caution' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
