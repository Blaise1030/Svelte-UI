<script lang="ts">
	import Box from '$lib/base/Box.svelte';
	import type StackProps from '$lib/stack/Stack.types';
	import type { IStyleInterface } from '$lib/base/styleProps';
	import { createEventDispatcher, getContext } from 'svelte';
	const onClick = (event: any) => dispatch('click', event);
	const dispatch = createEventDispatcher();

	export let colorScheme: 'teal' | 'purple' | 'blue' | 'gray' | 'red' | 'pink' = 'gray';
	export let sp: Partial<Omit<IStyleInterface, 'direction'>> & StackProps = {};
	export let variant: 'solid' | 'link' | 'ghost' | 'outline' = 'solid';
	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let disabled: boolean = false;
	export let isFullWidth = false;

	const common = getContext('common');

	$: ({ ...props } = $$props);
	$: filteredProps = { ...props, sp: undefined };
</script>

<Box
	style="user-select: none; outline: none; whitespace:nowrap;"
	{disabled}
	{...filteredProps}
	on:click={onClick}
	as="button"
	sp={{
		w: isFullWidth ? '100%' : 'auto',
		verticalAlign: 'baseline',
		fontWeight: 'semibold',
		alignItems: 'center',
		textAlign: 'center',
		fontFamily: 'body',
		borderRadius: 'md',
		overflow: 'hidden',
		cursor: 'pointer',
		lineHeight: '1.2',
		border: 'none',
		h: 'auto',
		d: 'flex',
		_disabled: {
			opacity: '60%',
			cursor: 'not-allowed'
		},
		_focus: {
			shadow: 'outline'
		},
		...$common.genComponentTheme({ size, colorScheme, variant, disabled, isFullWidth }, 'button'),
		...sp
	}}
>
	<slot name="left-icon" />
	<slot />
	<slot name="right-icon" />
</Box>
