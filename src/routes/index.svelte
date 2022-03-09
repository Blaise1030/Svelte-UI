<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import Wrap from '$lib/wrap/Wrap.svelte';
	import WrapItem from '$lib/wrap/WrapItem.svelte';
	import Center from '$lib/box/Center.svelte';
	import Grid from '$lib/grid/Grid.svelte';
	import GridItem from '$lib/grid/GridItem.svelte';

	const sampleArray = [1, 23, 4, 56, 6];
</script>

<Box sp={{ h: '100%', bg: 'gray.700', color: 'white', p: '10px', pl: '10px', mb: '2px' }}
	>This is a new element</Box
>
<Grid
	sp={{
		gridTemplateColumns: 'repeat(5, 1fr)',
		gridTemplateRows: 'repeat(2, 1fr)',
		gridGap: '4px',
		h: '200px'
	}}
>
	<GridItem
		sp={{
			border: '1px solid',
			gridColSpan: '1',
			gridRowSpan: '2',
			bg: 'red'
		}}
	>
		1
	</GridItem>

	<GridItem
		sp={{
			border: '1px solid',
			gridColSpan: '2',
			bg: 'red'
		}}
	>
		2
	</GridItem>

	<GridItem
		sp={{
			border: '10px solid',
			borderColor: 'white',
			gridColSpan: '2',
			bg: 'red.300',
			color: 'blue.600',
			fontWeight: 'bold',
			fontSize: '20px'
		}}
	>
		3
	</GridItem>

	<GridItem
		sp={{
			border: '1px solid',
			gridColSpan: '4',
			bg: 'red'
		}}
	>
		3
	</GridItem>
</Grid>
