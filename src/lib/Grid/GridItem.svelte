<script lang="ts">
	import Box from '$lib/base/Box.svelte';
	import type { GridItemProps, GridItemPropsOmit } from './Grid.types';

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
