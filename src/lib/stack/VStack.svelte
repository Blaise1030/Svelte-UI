<script lang="ts">
	import type { IStyleInterface } from '$lib/base/styleProps';
	import type StackProps from './Stack.types';
	import Stack from './Stack.svelte';

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
		direction: 'column',
		...sp
	}}
>
	<slot />
</Stack>
