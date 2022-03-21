<script lang="ts">
	import type { IStyleInterface } from '$lib/base/styleProps';
	import Box from '$lib/base/Box.svelte';

	export let sp: Partial<IStyleInterface> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	{...props}
	sp={{
		justifyContent: 'center',
		alignItems: 'center',
		d: 'flex',
		w: '100%',
		h: '100%',
		...sp
	}}
>
	<slot />
</Box>
