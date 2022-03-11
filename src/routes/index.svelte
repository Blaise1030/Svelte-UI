<script lang="ts" context="module">
	export const prerender = true;
	import Box from '$lib/box/Box.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import Center from '$lib/box/Center.svelte';
	import Stack from '$lib/stack/Stack.svelte';
	import Button from '$lib/Button/Button.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';

	const onGitHubClicked = (e) => window.open('https://github.com/Blaise1030/Svelte-UI', '_blank');
	const onGetStartedClicked = (e) => (window.location.href = '/components');
</script>

<!-- Navbar -->
<HStack
	sp={{
		borderBottom: '1px solid',
		borderColor: 'gray.300',
		pos: 'fixed',
		left: '0',
		top: '0'
	}}
>
	<!-- sp={{ pt: '1.4px', mr: '1' }} -->
	<HStack sp={{ align: 'space-between', justify: 'center', py: '3', px: '6' }}>
		<Box sp={{ fontSize: 'lg', color: 'gray.600', fontWeight: 'bold' }}>Svelte-UI</Box>
		<Button variant="outline" size="lg">
			<img
				slot="left-icon"
				src="https://img.icons8.com/material/24/FF0000/like--v1.png"
				alt="heart"
			/>

			Sponsor
		</Button>
	</HStack>
</HStack>

<!-- Body -->
<Box sp={{ h: '100vh', w: '100vw' }}>
	<Center>
		<VStack sp={{ justify: 'center', p: '2' }}>
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
					maxW: ['80%', '65%', '50%'],
					textAlign: 'center',
					fontFamily: 'body',
					color: 'gray.500',
					fontSize: 'lg',
					my: '8'
				}}
			>
				Svelte UI is a simple, modular component library that gives you the building blocks you need
				to build your Svelte applications with ease.
			</Box>
			<Stack sp={{ direction: ['column', 'row', 'row'] }}>
				<Button
					sp={{ p: '8', px: '6', w: ['90vw', 'auto', 'auto'] }}
					on:click={onGetStartedClicked}
					colorScheme="teal"
				>
					Get Started
					<img
						src="https://img.icons8.com/ios/25/FFFFFF/right--v1.png"
						slot="right-icon"
						alt="right"
					/>
				</Button>
				<Box sp={{ w: '5', h: ['3', '0', '0'] }} />
				<Button sp={{ p: '8', px: '6', w: ['90vw', 'auto', 'auto'] }} on:click={onGitHubClicked}>
					<img
						src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
						slot="left-icon"
						alt="github"
					/>
					GitHub
				</Button>
			</Stack>
		</VStack>
	</Center>
</Box>
