<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import Center from '$lib/box/Center.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import generateStylesClass from '$lib/system/styleComposer';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import { createEventDispatcher } from 'svelte';
	import { sizeVariant, buttonVariant } from './buttonConfig';

	const onClick = (event) => dispatch('click', event);
	const dispatch = createEventDispatcher();
	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let variant: 'solid' | 'link' | 'ghost' | 'outline' = 'solid';
	export let colorScheme: 'teal' | 'purple' | 'blue' | 'gray' | 'red' | 'pink' = 'gray';
	export let isFullWidth = false;
	export let disabled: boolean = false;
</script>

<button
	style="user-select: none; outline: none; whitespace:nowrap;"
	{disabled}
	class={generateStylesClass({
		w: isFullWidth ? '100%' : 'auto',
		overflow: 'hidden',
		verticalAlign: 'baseline',
		fontWeight: 'semibold',
		fontFamily: 'body',
		border: 'none',
		textAlign: 'center',
		borderRadius: 'md',
		cursor: 'pointer',
		lineHeight: '1.2',
		h: 'auto',
		d: 'flex',
		_focus: {
			shadow: 'outline'
		},
		_disabled: {
			opacity: '60%',
			cursor: 'not-allowed'
		},
		...sizeVariant[size],
		...buttonVariant(colorScheme, variant)
	})}
>
	<HStack sp={{ h: 'full' }}>
		<Box sp={{ h: 'full', px: '1', py: '1' }}>
			<slot name="left-icon" />
		</Box>
		<Center>
			<slot />
		</Center>
		<Box sp={{ h: 'full', px: '1', py: '1' }}>
			<slot name="right-icon" />
		</Box>
	</HStack>
</button>
