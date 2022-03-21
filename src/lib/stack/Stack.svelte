<script lang="ts">
	import type { IStyleInterface } from '$lib/base/styleProps';
	import Box from '$lib/base/Box.svelte';
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
		flexDirection: sp['direction'] || 'column',
		justifyContent: sp['align'] || 'start',
		alignItems: sp['justify'] || 'start',
		d: 'flex',
		...sp
	}}
>
	<slot />
</Box>
