<script lang="ts">
	import type { IStyleInterface } from '../system/styleProps';
	import Box from '$lib/box/Box.svelte';
	import type { GridItemProps, GridItemPropsOmit } from './Grid.types';
	export let sp: Partial<GridItemPropsOmit & GridItemProps> = {};
	$: ({ ...props } = $$props);
</script>

<Box {...props} class="grid-item" sp={{ ...sp, gridColumn: `span / span`, gridRow: `span / span` }}>
	<slot />
</Box>
