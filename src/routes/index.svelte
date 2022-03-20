<script>
	import AspectRatio from '$lib/aspectRatio/AspectRatio.svelte';
	import Box from '$lib/base/Box.svelte';
	import Button from '$lib/button/Button.svelte';
	import Center from '$lib/center/Center.svelte';
	import Grid from '$lib/Grid/Grid.svelte';
	import GridItem from '$lib/Grid/GridItem.svelte';
</script>

<Box sp={{ p: '10px' }}>
	<Button colorScheme="teal">
		<Box slot="left-icon">Left Icon</Box>
		<Box as="p">This is the button</Box>
		<Box slot="right-icon">Left Icon</Box>
	</Button>
</Box>

<Box sp={{ p: '8', bg: 'red.100' }}>Hello</Box>
<Grid
	sp={{
		gridTemplateColumns: 'repeat(6,1fr)',
		bg: 'red'
	}}
>
	<GridItem sp={{ colSpan: '5' }}>Hello1</GridItem>
	<GridItem sp={{ colSpan: '1' }}>Hello1</GridItem>
	<GridItem>Hello3</GridItem>
	<GridItem>Hello4</GridItem>
	<GridItem>Hello5</GridItem>
	<GridItem>Hello6</GridItem>
	<GridItem>Hello6</GridItem>
</Grid>

<Box sp={{ w: '80%' }}>
	<AspectRatio sp={{ bg: 'red', ratio: '2/1' }}>
		<Center>
			<Box>This is the box</Box>
		</Center>
	</AspectRatio>
</Box>
