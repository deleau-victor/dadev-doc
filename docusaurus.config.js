// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Dadev Docs',
	tagline: 'Documentation pour les développeurs',
	favicon: 'img/dadev.svg',

	// Set the production url of your site here
	url: 'https://doc.dadev.fr',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	// plugins: [
	// 	[
	// 		'@docusaurus/plugin-content-docs',
	// 		{
	// 			id: 'docs-csharp',
	// 			path: 'docs-csharp',
	// 			routeBasePath: 'docs-csharp',
	// 			sidebarPath: require.resolve('./sidebars.js'),
	// 		},
	// 	],
	// ],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'security',
						position: 'right',
						label: 'Sécurité',
					},
					{
						type: 'docSidebar',
						position: 'right',
						sidebarId: 'csharp',
						label: 'C#',
					},
					{
						type: 'docSidebar',
						position: 'right',
						sidebarId: 'go',
						label: 'GO',
					},
					{
						type: 'docSidebar',
						position: 'right',
						sidebarId: 'php',
						label: 'PHP',
					},
					{
						type: 'docSidebar',
						position: 'right',
						sidebarId: 'typescript',
						label: 'TypeScript',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Documentations',
						items: [
							{
								label: 'C#',
								to: '/docs/csharp/csharp',
							},
							{
								label: 'PHP',
								to: '/docs/php/php',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Dadev, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['csharp', 'bash'],
			},
		}),
}

module.exports = config
