// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

// https://astro.build/config
export default defineConfig({

	integrations: [
		starlight({
			plugins: [
				// Generate the Obsidian vault pages.
				starlightObsidian({
					output: 'docs',
					sidebar: {
						collapsed: false,
						label: 'الفهرس'
					},
					vault: './HR-KSA-VAULT',
				}),
			],
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'Arabic',
					dir: 'rtl',
					lang: 'ar', // lang is required for root locales
				},
			},
			title: 'HR KSA',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				obsidianSidebarGroup
			],
		}),
	],
});
