module.exports = {
	framework: '@storybook/svelte',
	webpackFinal: async (config) => {
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes('svelte-loader')
		);
		svelteLoader.options.preprocess = require('svelte-preprocess')();
		return config;
	},
	stories: [
		// "../src/**/*.stories.mdx",
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-svelte-csf',
		{ name: '@storybook/addon-essentials', options: { docs: false } }
	]
};
