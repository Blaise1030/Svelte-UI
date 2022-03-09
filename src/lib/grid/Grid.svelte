<script lang="ts">
	import type { IStyleInterface } from '../system/styleProps';
	import generateStylesClass from '../system/styleComposer';
	import Box from '$lib/box/Box.svelte';
	export let sp: Partial<IStyleInterface> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	{...props}
	sp={{
		...sp,
		d: 'grid'
	}}
>
	<slot />
</Box>
