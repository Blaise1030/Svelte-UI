<script lang="ts">
	import Box from '$lib/base/Box.svelte';
	import type { IStyleInterface } from '$lib/base/styleProps';
	type AspectRatioProps = { ratio: string };
	export let sp: Partial<IStyleInterface & AspectRatioProps> = {};
	$: ({ ...props } = $$props);
</script>

<Box
	style={`aspect-ratio: ${sp['ratio'] || '1/1'}; overflow:hidden; object-fit:scale-down`}
	sp={{ ...sp }}
	{props}
>
	<slot />
</Box>
