<script lang="ts">
	import type { SystemSize, SytemColorScheme } from '$lib/system/System.types';
	import { createEventDispatcher } from 'svelte';

	const COMPONENT_NAME = 'button';

	export let colorScheme: SytemColorScheme = 'gray';
	export let size: SystemSize = 'md';
	export let label = '';

	export let type: 'button' | 'reset' | 'submit' = 'button';
	export let spinnerPlacement: 'start' | 'end' = 'start';
	export let loadingText: string = 'Loading';
	export let isFullWidth: boolean = false;
	export let isDisabled: boolean = false;
	export let isLoading: boolean = false;
	export let isActive: boolean = false;
	export let variant: ButtonVariants;

	const dispatch = createEventDispatcher();
	const onClick = (event) => dispatch('click', event);

	const className = ['base', size, `isFullWidth-${isFullWidth}`]
		.map((name) => `${COMPONENT_NAME}-${name}`)
		.join(' ');
</script>

<button class={className} {type} on:click={onClick} disabled={isDisabled || isLoading}>
	{#if isLoading}
		<div>{loadingText}</div>
	{:else}
		<slot name="leftIcon" />
		{label}
		<slot name="rightIcon" />
	{/if}
</button>

<style>
	.button-base {
		border: none;
		outline: none;
		width: fit-content;
		cursor: pointer;
		border-radius: 0.75rem;
	}

	.button-base:active {
		outline: auto;
		transition-duration: 1s;
	}

	.button-isFullWidth-true {
		width: 100%;
	}

	.button-xl {
		padding-right: 24px;
		padding-left: 24px;
		font-size: 1.125rem;
		min-width: 48px;
		height: 48px;
	}

	.button-lg {
		padding-right: 24px;
		padding-left: 24px;
		font-size: 1.125rem;
		min-width: 48px;
		height: 48px;
	}

	.button-md {
		height: 40px;
		min-width: 40px;
		font-size: 1rem;
		padding-right: 16px;
		padding-left: 16px;
	}

	.button-sm {
		height: 32px;
		min-width: 32px;
		font-size: 0.875rem;
		padding-right: 12px;
		padding-left: 12px;
	}

	.button-xs {
		height: 24px;
		min-width: 24px;
		font-size: 0.75rem;
		padding-right: 8px;
		padding-left: 8px;
	}
</style>
