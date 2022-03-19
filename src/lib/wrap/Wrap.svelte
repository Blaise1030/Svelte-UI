<script lang="ts">
	import type { IStyleInterface } from '$lib/base/styleProps';
	import type WrapProps from './Wrap.types';
	import Box from '$lib/base/Box.svelte';
	$: ({ ...props } = $$props);
	export let sp: Partial<
		Omit<IStyleInterface, 'd' | 'alignItems' | 'justifyContent' | 'flexDirection' | 'gridGap'>
	> &
		WrapProps = {};
</script>

<Box
	{...props}
	as="ul"
	sp={{
		justifyContent: sp['align'] || 'start',
		alignItems: sp['justify'] || 'start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		d: 'flex',
		...sp
	}}
>
	<slot />
</Box>
