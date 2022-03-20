<script lang="ts">
	import type { GridItemPropsOmit, GridItemProps } from './Grid.types';
	import Box from '$lib/base/Box.svelte';
	export let sp: Partial<GridItemPropsOmit & GridItemProps> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	{...props}
	sp={{
		gridColumn: `span ${sp['colSpan'] || '1'} / span ${sp['colSpan'] || '1'}`,
		gridRow: `span ${sp['rowSpan'] || '1'} / span ${sp['rowSpan'] || '1'}`,
		...sp
	}}
	as="div"
>
	<slot />
</Box>
