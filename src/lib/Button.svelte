<script lang="ts">
	import Stack from '$lib/stack/Stack.svelte';
	import type StackProps from '$lib/stack/Stack.types';
	import generateStylesClass from '$lib/system/styleComposer';
	import type { IStyleInterface } from '$lib/system/styleProps';
	import { createEventDispatcher } from 'svelte';

	const onClick = (event: any) => dispatch('click', event);
	const dispatch = createEventDispatcher();

	export let colorScheme: 'teal' | 'purple' | 'blue' | 'gray' | 'red' | 'pink' = 'gray';
	export let sp: Partial<Omit<IStyleInterface, 'direction'>> & StackProps = {};
	export let variant: 'solid' | 'link' | 'ghost' | 'outline' = 'solid';
	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';

	export let disabled: boolean = false;
	export let isFullWidth = false;

	const sizeVariant = {
		lg: {
			h: '12',
			minW: '12',
			fontSize: 'lg',
			px: '6'
		},
		md: {
			h: '10',
			minW: '10',
			fontSize: 'md',
			px: '4'
		},
		sm: {
			h: '8',
			minW: '8',
			fontSize: 'sm',
			px: '3'
		},
		xs: {
			h: '6',
			minW: '6',
			fontSize: 'xs',
			px: '2'
		}
	};

	function buttonVariant(themeColor: string, variant: string) {
		return {
			ghost: {
				bg: 'none',
				border: 'none',
				color: themeColor === 'gray' ? `${themeColor}.700` : `${themeColor}.500`,
				_active: { bg: `${themeColor}.100`, brightness: '0.95' },
				_hover: {
					bg: `${themeColor}.100`
				}
			},
			outline: {
				color: themeColor === 'gray' ? `gray.600` : `${themeColor}.500`,
				border: '2px',
				borderStyle: 'solid',
				borderColor: `${themeColor}.200`,
				bg: 'none',
				_active: { bg: `${themeColor}.100`, brightness: '0.95' },
				_hover: {
					bg: `${themeColor}.100`
				}
			},
			solid: {
				bg: themeColor === 'gray' ? 'gray.200' : `${themeColor}.500`,
				color: themeColor === 'gray' ? 'black' : 'white',
				_hover: {
					opacity: '85%'
				},
				_active: {
					opacity: '110%'
				}
			},
			link: {
				p: '0',
				h: 'auto',
				border: 'none',
				lineHeight: 'normal',
				verticalAlign: 'baseline',
				color: themeColor === 'gray' ? `${themeColor}.700` : `${themeColor}.500`,
				bg: 'none',
				_hover: {
					textDecoration: 'underline'
				},
				_active: {
					color: `${themeColor}.700`
				}
			}
		}[variant];
	}

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
	<Stack sp={{ h: 'full', align: 'center', direction: 'row' }}>
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
	</Stack>
</button>
