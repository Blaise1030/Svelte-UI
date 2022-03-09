<script lang="ts">
	import generateStylesClass from '$lib/system/styleComposer';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import type WrapProps from './Wrap.types';
	export let styleProps: Partial<IStyleInterface> & WrapProps = {};
	$: ({ ...props } = $$props);
</script>

<li
	{...props}
	style="list-style-type: none;"
	class={generateStylesClass({
		...styleProps
	})}
>
	<slot />
</li>
