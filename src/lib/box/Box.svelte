<script lang="ts">
	import type { IStyleInterface } from '../system/styleProps';
	import generateStylesClass from '../system/styleComposer';
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
