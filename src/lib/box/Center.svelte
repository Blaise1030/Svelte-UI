<script lang="ts">
	import Box from './Box.svelte';
	import type { IStyleInterface } from '../system/styleProps';
	import generateStylesClass from '../system/styleComposer';
	export let sp: Partial<IStyleInterface> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	{...props}
	sp={{
		...sp,
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		d: 'flex',
		h: '100%',
		w: '100%'
	}}
>
	<slot />
</Box>
