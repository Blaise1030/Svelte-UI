<script lang="ts">
	import type StackProps from './Stack.types';
	import Stack from './Stack.svelte';
	import type { IStyleInterface } from '$lib/base/styleProps';
	$: ({ ...props } = $$props);
	export let sp: Partial<
		Omit<IStyleInterface, 'd' | 'alignItems' | 'justifyContent' | 'flexDirection' | 'gridGap'>
	> &
		StackProps = {};
</script>

<Stack
	{...props}
	sp={{
		gridGap: sp['gap'] || '0px',
		direction: 'row',
		...sp
	}}
>
	<slot />
</Stack>
