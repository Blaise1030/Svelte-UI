<script>
	import Box from '$lib/box/Box.svelte';
	import Center from '$lib/box/Center.svelte';
	// import Button from '$lib/Button/Button.svelte';
	import Grid from '$lib/grid/Grid.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import Wrap from '$lib/wrap/Wrap.svelte';
	import WrapItem from '$lib/wrap/WrapItem.svelte';
	const items = [
		'randoma',
		'ASDASDASD',
		'randomzdczxca',
		'ranzxczxczxdoma',
		'rczxczxcandoma',
		'randzxczxczxczxcoma'
	];
</script>

<Box sp={{ p: '20px', overflowY: 'none' }}>
	<!-- <Button size="lg" on:click={() => history.back()}>Back</Button> -->
	<br />
	<VStack sp={{ justify: 'center' }}>
		<Box sp={{ w: '100%', color: 'gray.700', fontSize: 'lg', fontWeight: 'bold' }}>
			<Box
				>Hehe I am lazy haven't started with the documentation
				<br />
				Here are existing components
			</Box>
		</Box>
		<br />

		<Box
			sp={{
				w: '100%',
				color: 'gray.700',
				fontSize: 'lg',
				fontWeight: 'bold',
				textDecoration: 'underline'
			}}
			>Components
		</Box>
		<br />

		<Box sp={{ w: '100%' }}>
			<VStack sp={{ w: 'full' }}>
				<Box>Buttons</Box>
				<br />
				<Wrap sp={{ align: 'center', spacing: '10px' }}>
					<!-- <WrapItem>
						<Button>Buttons</Button>
					</WrapItem>
					<WrapItem>
						<Button colorScheme="teal">Buttons</Button>
					</WrapItem>
					<WrapItem>
						<Button variant="link" colorScheme="teal">Buttons</Button>
					</WrapItem>
					<WrapItem>
						<Button variant="outline" colorScheme="teal">Buttons</Button>
					</WrapItem>

					<WrapItem>
						<Button variant="ghost" colorScheme="teal">Buttons</Button>
					</WrapItem> -->
				</Wrap>
			</VStack>
		</Box>
		<br />
		<Box
			sp={{
				w: '100%',
				color: 'gray.700',
				fontSize: 'lg',
				fontWeight: 'bold',
				textDecoration: 'underline'
			}}
			>Layouts
		</Box>
		<br />
		<Box sp={{ w: '100%' }}>
			<Box>Wrap</Box>
			<Wrap sp={{ spacing: '10px' }}>
				{#each items as item, i}
					<WrapItem>
						<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
					</WrapItem>
				{/each}
			</Wrap>
		</Box>
		<br />
		<Box sp={{ w: '100%' }}>
			<Box>Grid</Box>
			<br />
			<Grid sp={{ gridTemplateColumns: 'repeat(3,1fr)', gridGap: '2' }}>
				{#each items as item, i}
					<WrapItem>
						<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
					</WrapItem>
				{/each}
			</Grid>
		</Box>
		<br />

		<Box sp={{ w: '100%' }}>
			<Box>VStack</Box>
			<br />
			<VStack>
				{#each items as item, i}
					<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
				{/each}
			</VStack>
			<VStack sp={{ justify: 'center', align: 'flex-end' }}>
				{#each items as item, i}
					<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
				{/each}
			</VStack>
		</Box>

		<Box sp={{ w: '100%' }}>
			<Box>HStack</Box>
			<br />
			<HStack>
				{#each items as item, i}
					<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
				{/each}
			</HStack>
			<br />
			<HStack sp={{ justify: 'center', align: 'flex-end' }}>
				{#each items as item, i}
					<Box sp={{ bg: 'red', p: `${i % 4}` }}>{item}</Box>
				{/each}
			</HStack>
		</Box>

		<Box sp={{ w: '100%' }}>
			<Box>Center</Box>
			<br />
			<Box sp={{ bg: 'blue.200', h: '200px', w: '200px' }}>
				<Center>
					<Box>I am center</Box>
				</Center>
			</Box>
		</Box>
	</VStack>
	<br />
</Box>
