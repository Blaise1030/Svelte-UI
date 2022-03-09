<script lang="ts">
	import type { IStyleInterface } from '$lib/system/styleProps';
	import type StackProps from './Stack.types';
	import Stack from './Stack.svelte';

	export let sp: Partial<Omit<IStyleInterface, 'direction'>> & StackProps = {};
	$: ({ ...props } = $$props);
</script>

<Stack
	{...props}
	sp={{
		direction: 'column',
		...sp
	}}
>
	<slot />
</Stack>
