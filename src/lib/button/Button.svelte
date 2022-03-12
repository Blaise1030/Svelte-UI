<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import Center from '$lib/box/Center.svelte';
	import Grid from '$lib/grid/Grid.svelte';
	import GridItem from '$lib/grid/GridItem.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import Stack from '$lib/stack/Stack.svelte';
	import type StackProps from '$lib/stack/Stack.types';
	import generateStylesClass from '$lib/system/styleComposer';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import { createEventDispatcher } from 'svelte';
	import { sizeVariant, buttonVariant } from '$lib/button/buttonConfig';

	const onClick = (event) => dispatch('click', event);
	const dispatch = createEventDispatcher();

	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let variant: 'solid' | 'link' | 'ghost' | 'outline' = 'solid';
	export let colorScheme: 'teal' | 'purple' | 'blue' | 'gray' | 'red' | 'pink' = 'gray';
	export let sp: Partial<Omit<IStyleInterface, 'direction'>> & StackProps = {};
	export let isFullWidth = false;
	export let disabled: boolean = false;

	$: ({ ...props } = $$props);
	$: filteredProps = { ...props, sp: undefined };
</script>

<button
	style="user-select: none; outline: none; whitespace:nowrap;"
	{disabled}
	{...filteredProps}
	on:click={onClick}
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
		...buttonVariant(colorScheme, variant),
		...sp
	})}
>
	<HStack sp={{ h: 'full', align: 'center' }}>
		{#if $$slots['left-icon']}
			<Stack sp={{ h: 'full', align: 'center', justify: 'center', mr: '2' }}>
				<slot name="left-icon" />
			</Stack>
		{/if}
		<Stack sp={{ h: 'full', align: 'center', justify: 'center' }}>
			<slot />
		</Stack>
		{#if $$slots['right-icon']}
			<Stack sp={{ h: 'full', align: 'center', justify: 'center', ml: '2' }}>
				<slot name="right-icon" />
			</Stack>
		{/if}
	</HStack>
</button>
