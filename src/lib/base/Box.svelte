<script lang="ts">
	import type { IStyleInterface } from './styleProps';
	import { getContext } from 'svelte';
	const common = getContext('common') as any;

	export let sp: Partial<IStyleInterface> = {};
	export let as = 'div';

	$: ({ ...props } = $$props);
</script>

<!-- Containers -->
{#if as === 'div'}
	<div class={$common.genStyle(sp)} {...props}><slot /></div>
{:else if as === 'span'}
	<span class={$common.genStyle(sp)} {...props}><slot /></span>
{:else if as === 'nav'}
	<nav class={$common.genStyle(sp)} {...props}><slot /></nav>
{:else if as === 'main'}
	<main class={$common.genStyle(sp)} {...props}><slot /></main>
{:else if as === 'footer'}
	<footer class={$common.genStyle(sp)} {...props}><slot /></footer>
{:else if as === 'header'}
	<header class={$common.genStyle(sp)} {...props}><slot /></header>

	<!-- Lists -->
{:else if as === 'ol'}
	<ol class={$common.genStyle(sp)} {...props}><slot /></ol>
{:else if as === 'ul'}
	<ul class={$common.genStyle(sp)} {...props}><slot /></ul>
{:else if as === 'li'}
	<li class={$common.genStyle(sp)} {...props}><slot /></li>

	<!-- Text -->
{:else if as === 'h1'}
	<h1 class={$common.genStyle(sp)} {...props}><slot /></h1>
{:else if as === 'h2'}
	<h2 class={$common.genStyle(sp)} {...props}><slot /></h2>
{:else if as === 'h3'}
	<h3 class={$common.genStyle(sp)} {...props}><slot /></h3>
{:else if as === 'h4'}
	<h4 class={$common.genStyle(sp)} {...props}><slot /></h4>
{:else if as === 'h5'}
	<h5 class={$common.genStyle(sp)} {...props}><slot /></h5>
{:else if as === 'h6'}
	<h6 class={$common.genStyle(sp)} {...props}><slot /></h6>
{:else if as === 'p'}
	<p class={$common.genStyle(sp)} {...props}><slot /></p>

	<!-- Other  -->
{:else if as === 'button'}
	<button class={$common.genStyle(sp)} {...props}><slot /></button>

	<!-- Default Fallback -->
{:else}
	<div class={$common.genStyle(sp)} {...props}><slot /></div>
{/if}
