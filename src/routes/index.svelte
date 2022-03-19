<script lang="ts">
	import HStack from '$lib/stack/HStack.svelte';
	import Box from '$lib/base/Box.svelte';
	import Wrap from '$lib/wrap/Wrap.svelte';
	import WrapItem from '$lib/wrap/WrapItem.svelte';
	import Center from '$lib/center/Center.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import { getContext } from 'svelte';
	import Grid from '$lib/Grid/Grid.svelte';
	import GridItem from '$lib/Grid/GridItem.svelte';
	const common = getContext('common');
</script>

<Box
	sp={{
		transition: 'background-color 150ms linear',
		bg: $common?.useColorMode('white', 'black'),
		color: $common?.useColorMode('black', 'white')
	}}
>
	<button on:click={() => $common?.toggleTheme()}>Change Color Mode</button>
	<HStack sp={{ p: '1rem', gap: '10px' }}>
		<Box sp={{ bg: 'red', p: '10px' }}>Hello1</Box>
		<Box sp={{ bg: 'blue' }}>Hello1</Box>
		<Box>Hello1</Box>
		<Box>Hello1</Box>
	</HStack>
	<Wrap sp={{ w: '100px' }}>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
		<WrapItem>Item 1</WrapItem>
	</Wrap>

	<Center sp={{ w: '500px', h: '500px', bg: 'red' }}>
		<Box as="h2">Hello</Box>
	</Center>

	<HStack sp={{ w: '100%', bg: 'blue', color: 'white' }}>
		<Box sp={{ p: '20px' }}>Hello1</Box>
		<Spacer />
		<Box sp={{ p: '20px' }}>Hello1</Box>
	</HStack>

	<a href="/components">Next page</a>

	<Grid sp={{ gridTemplateColumns: 'repeat(5,1fr)', gridGap: '4px', p: '20px', bg: 'red' }}>
		<GridItem>1</GridItem>
		<GridItem>2</GridItem>
		<GridItem>3</GridItem>
		<GridItem>3</GridItem>
		<GridItem>3</GridItem>
		<GridItem>3</GridItem>
	</Grid>
</Box>
