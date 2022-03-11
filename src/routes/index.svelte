<script lang="ts">
	import Box from '$lib/box/Box.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import Center from '$lib/box/Center.svelte';
	import Stack from '$lib/stack/Stack.svelte';
	import Button from '$lib/Button/Button.svelte';
</script>

<Box sp={{ h: '100vh', w: '100vw' }}>
	<Center>
		<VStack sp={{ justify: 'center' }}>
			<VStack
				sp={{
					fontFamily: 'heading',
					fontWeight: 'black',
					textAlign: 'center',
					justify: 'center',
					fontSize: '5xl'
				}}
			>
				<Box sp={{ color: 'gray.700' }}>Create Svelte Apps</Box>
				<Box sp={{ color: 'teal.500' }}>with ease</Box>
			</VStack>
			<Box
				sp={{
					fontSize: 'lg',
					fontFamily: 'body',
					color: 'gray.500',
					textAlign: 'center',
					maxW: ['80%', '50%'],
					my: '8'
				}}
			>
				Svelte UI is a simple, modular component library that gives you the building blocks you need
				to build your Svelte applications with ease.
			</Box>
			<Stack sp={{ direction: ['column', 'row', 'row'] }}>
				<Button colorScheme="teal" sp={{ p: '8', px: '6', w: ['90vw', 'auto', 'auto'] }}
					>Get Started</Button
				>
				<Box sp={{ w: '5', h: ['3', '0', '0'] }} />
				<Button sp={{ p: '8', px: '6', w: ['90vw', 'auto', 'auto'] }}>GitHub</Button>
			</Stack>
		</VStack>
	</Center>
</Box>
