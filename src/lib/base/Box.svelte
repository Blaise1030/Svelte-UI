<script>
	import { getContext } from 'svelte';
	export let as = 'div';
	$: ({ ...props } = $$props);
</script>

<!-- Containers -->
{#if as === 'div'}
	<div {...props}><slot /></div>
{:else if as === 'span'}
	<span {...props}><slot /></span>
{:else if as === 'nav'}
	<nav {...props}><slot /></nav>
{:else if as === 'main'}
	<main {...props}><slot /></main>
{:else if as === 'footer'}
	<footer {...props}><slot /></footer>
{:else if as === 'header'}
	<header {...props}><slot /></header>

	<!-- Lists -->
{:else if as === 'ol'}
	<ol {...props}><slot /></ol>
{:else if as === 'ul'}
	<ul {...props}><slot /></ul>
{:else if as === 'li'}
	<li {...props}><slot /></li>

	<!-- Text -->
{:else if as === 'h1'}
	<h1 {...props}><slot /></h1>
{:else if as === 'h2'}
	<h2 {...props}><slot /></h2>
{:else if as === 'h3'}
	<h3 {...props}><slot /></h3>
{:else if as === 'h4'}
	<h4 {...props}><slot /></h4>
{:else if as === 'h5'}
	<h5 {...props}><slot /></h5>
{:else if as === 'h6'}
	<h6 {...props}><slot /></h6>
{:else if as === 'p'}
	<p {...props}><slot /></p>
{/if}
