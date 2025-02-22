// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'
import remarkCustomHeaderId from "remark-custom-header-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkMark } from "remark-mark-highlight";
import starlightViewModes from 'starlight-view-modes';
// https://astro.build/config
export default defineConfig({
	markdown: {
		gfm: false,
		remarkPlugins: [remarkCustomHeaderId, remarkMark],
		rehypePlugins: [[rehypeAutolinkHeadings, {
			// Wrap the heading text in a link.
			behavior: "wrap",
			properties: {
				className: ["section_heading"]
			}
		}]],

	},
	integrations: [
		starlight({
			tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 6 },
			plugins: [

				// Generate the Obsidian vault pages.
				starlightObsidian({
					// tableOfContentsOverview: 'title',
					autoLinkHeadings: false,
					copyFrontmatter: 'all',
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
			customCss: ["./src/styles/custom.css"],


		}),
	],
});
