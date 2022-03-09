<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import type StackProps from './Stack.types';

	$: ({ ...props } = $$props);
	export let sp: Partial<
		Omit<IStyleInterface, 'd' | 'alignItems' | 'justifyContent' | 'flexDirection'>
	> &
		StackProps = {};
</script>

<Box
	{...props}
	sp={{
		d: 'flex',
		alignItems: sp['justify'] || 'start',
		justifyContent: sp['align'] || 'start',
		flexDirection: sp['direction'] || 'column',
		...sp
	}}
>
	<slot />
</Box>
