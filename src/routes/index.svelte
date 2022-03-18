<script>
	import Box from '$lib/base/Box.svelte';
	import { getContext } from 'svelte';
	const common = getContext('common');
</script>

<Box>{$common.isDarkMode}</Box>
<button on:click={$common.toggleTheme}>Toggling </button>
<a href="/components">Next page</a>
