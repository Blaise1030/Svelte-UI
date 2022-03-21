<script lang="ts">
	import type { GridItemPropsOmit, GridItemProps } from './Grid.types';
	import Box from '$lib/base/Box.svelte';
	export let sp: Partial<GridItemPropsOmit & GridItemProps> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	{...props}
	sp={{
		gridColumn: Array.isArray(sp['colSpan'])
			? sp['colSpan'].map((span) => `span ${span || '1'} / span ${span || '1'}`)
			: `span ${sp['colSpan'] || '1'} / span ${sp['colSpan'] || '1'}`,
		gridRow: Array.isArray(sp['rowSpan'])
			? sp['rowSpan'].map((span) => `span ${span || '1'} / span ${span || '1'}`)
			: `span ${sp['rowSpan'] || '1'} / span ${sp['rowSpan'] || '1'}`,
		...sp
	}}
	as="div"
>
	<slot />
</Box>
