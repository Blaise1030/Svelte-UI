<script lang="ts">
	import AspectRatio from '$lib/aspectRatio/AspectRatio.svelte';
	import Box from '$lib/base/Box.svelte';
	import Button from '$lib/button/Button.svelte';
	import Center from '$lib/center/Center.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import { getContext } from 'svelte';
	const common = getContext('common');
</script>

<Box
	as="nav"
	sp={{
		borderBottom: '1px solid',
		borderColor: 'gray.200',
		zIndex: '10',
		pos: 'fixed',
		bg: 'white',
		w: '100%',
		left: '0',
		top: '0'
	}}
>
	<HStack sp={{ w: '100%' }}>
		<Box sp={{ p: '5' }}>Leading</Box>
		<Spacer />
		<Box sp={{ p: '5' }}>Ending</Box>
	</HStack>
</Box>

<Box as="main">
	<Box as="section" sp={{ h: '100Vh', w: '100vw' }}>
		<Center>
			<VStack sp={{ align: 'center', textAlign: 'center' }}>
				<Box
					as="span"
					sp={{
						fontSize: ['2xl', '3xl', '6xl'],
						fontFamily: 'heading',
						fontWeight: 'black',
						color: 'gray.700'
					}}
					>Create accessible Svelte Apps
					<br />
					<Box as="span" sp={{ color: 'teal.600' }}>with speed</Box>
				</Box>
				<HStack sp={{ align: 'center', justify: 'center', gap: '2', p: '8' }}>
					<Button colorScheme="teal" size="lg" sp={{ px: '50px', py: '30px' }}>Start Now</Button>
					<Button size="lg" sp={{ px: '50px', py: '30px' }}>GitHub</Button>
				</HStack>
			</VStack>
		</Center>
	</Box>
	<Box as="section" sp={{ h: '100Vh', w: '100vw' }}>
		<Center>
			<VStack>
				<Box as="p">Svelte UI</Box>
			</VStack>
		</Center>
	</Box>
</Box>
