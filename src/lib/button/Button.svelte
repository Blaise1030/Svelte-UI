<script lang="ts">
	import Box from '$lib/base/Box.svelte';
	import Stack from '$lib/stack/Stack.svelte';
	import type StackProps from '$lib/stack/Stack.types';
	import type { IStyleInterface } from '$lib/base/styleProps';

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
				color: themeColor === 'gray' ? `${themeColor}.700` : `${themeColor}.500`,
				verticalAlign: 'baseline',
				lineHeight: 'normal',
				border: 'none',
				bg: 'none',
				h: 'auto',
				p: '0',
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
		...sizeVariant[size],
		...buttonVariant(colorScheme, variant),
		...sp
	}}
>
	<slot name="left-icon" />
	<slot />
	<slot name="right-icon" />
</Box>
