<script lang="ts">
	import type { IStyleInterface } from './styleProps';
	import { getContext } from 'svelte';
	const common = getContext('common') as any;

	export let sp: Partial<IStyleInterface> = {};
	export let as = 'div';

	import { createEventDispatcher } from 'svelte';
	const onClick = (event: any) => dispatch('click', event);
	const dispatch = createEventDispatcher();

	$: ({ ...props } = $$props);
</script>

<!-- Containers -->
{#if as === 'div'}
	<div on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</div>
{:else if as === 'span'}
	<span on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}
		><slot /></span
	>
{:else if as === 'nav'}
	<nav on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</nav>
{:else if as === 'main'}
	<main on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</main>
{:else if as === 'footer'}
	<footer on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</footer>
{:else if as === 'header'}
	<header on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</header>

	<!-- Lists -->
{:else if as === 'ol'}
	<ol on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</ol>
{:else if as === 'ul'}
	<ul on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</ul>
{:else if as === 'li'}
	<li on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</li>

	<!-- Text -->
{:else if as === 'h1'}
	<h1 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h1>
{:else if as === 'h2'}
	<h2 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h2>
{:else if as === 'h3'}
	<h3 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h3>
{:else if as === 'h4'}
	<h4 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h4>
{:else if as === 'h5'}
	<h5 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h5>
{:else if as === 'h6'}
	<h6 on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</h6>
{:else if as === 'p'}
	<p on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</p>

	<!-- Other  -->
{:else if as === 'button'}
	<button on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}
		><slot /></button
	>

	<!-- Default Fallback -->
{:else}
	<div on:click={onClick} class={$common.genStyle({ ...sp, fontFamily: 'body' })} {...props}>
		<slot />
	</div>
{/if}
