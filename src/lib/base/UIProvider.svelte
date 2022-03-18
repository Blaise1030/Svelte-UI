<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const useColorMode = (light: string, dark: string) => ($common.isDarkMode ? dark : light);
	const toggleTheme = () => ($common.isDarkMode = !$common.isDarkMode);
	const genStyle = (sp) => {

	};

	onMount(() => ($common.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches));

	let common = writable({
		isDarkMode: false,
		useColorMode,
		toggleTheme
	});

	let functionProvider = writable({ genStyle });

	setContext('common', common);
	setContext('functionProvider', functionProvider);
</script>

<slot />
