<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import type { IStyleInterface } from '$lib/system/styleProps';
	export let sp: Partial<IStyleInterface> = {};
	$: ({ ...props } = $$props);
</script>

<Box {...props} sp={{ w: '100%', ...sp }} />
