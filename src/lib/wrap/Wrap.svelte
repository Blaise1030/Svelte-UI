<script lang="ts">
	import { css } from '@emotion/css';
	import generateStylesClass from '$lib/system/styleComposer';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import type WrapProps from './Wrap.types';
	export let sp: Partial<
		IStyleInterface & Omit<IStyleInterface, 'flexDirection' | 'flexWrap' | 'd' | 'spacing'>
	> &
		WrapProps = {};
	$: ({ ...props } = $$props);
	const spacing = css`
		li {
			margin: ${sp['spacing'] || '5px'};
		}
	`;
</script>

<ul
	{...props}
	class={`${spacing} ${generateStylesClass({
		justifyContent: sp['justify'] || 'start',
		flexDirection: sp['direction'] || 'row',
		alignItems: sp['align'] || 'start',
		flexWrap: 'wrap',
		d: 'flex',
		...sp
	})}`}
>
	<slot />
</ul>
