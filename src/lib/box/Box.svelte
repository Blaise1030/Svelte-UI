<script lang="ts">
	import type { IStyleInterface } from '../system/styleProps';
	import generateStylesClass from '../system/styleComposer';
	import { onMount } from 'svelte';
	export let sp: Partial<IStyleInterface> = {};
	export let as: string = 'div';

	$: ({ ...props } = $$props);
	$: filteredProps = { ...props, sp: undefined };
</script>

<div {...filteredProps} {as}>
	<slot />
</div>
