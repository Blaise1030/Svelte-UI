<script lang="ts">
	import Box from '$lib/base/Box.svelte';
	import type { GridItemProps, GridItemPropsOmit } from './Grid.types';

	export let sp: Partial<GridItemPropsOmit & GridItemProps> = {};
	$: ({ ...props } = $$props);
</script>

<Box {...props} as="div" class="grid-item" sp={{ ...sp }}>
	<slot />
</Box>
