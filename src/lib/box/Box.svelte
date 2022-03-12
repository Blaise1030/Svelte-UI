<script lang="ts">
	import type { IStyleInterface } from '../system/styleProps';
	import { crossfade } from 'svelte/transition';
	import generateStylesClass from '../system/styleComposer';
	import Button from '$lib/Button/Button.svelte';
	export let sp: Partial<IStyleInterface> = {};
	export let as: string = 'div';

	$: ({ ...props } = $$props);
	$: filteredProps = { ...props, sp: undefined };
</script>

<div
	{...filteredProps}
	{as}
	class={generateStylesClass({
		fontFamily: 'body',
		...sp
	})}
>
	<slot />
</div>
