<script lang="ts">
	import icon from '../../static/svelte-logo.svg';
	import Box from '$lib/base/Box.svelte';
	import Button from '$lib/button/Button.svelte';
	import Center from '$lib/center/Center.svelte';
	import Grid from '$lib/Grid/Grid.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Stack from '$lib/stack/HStack.svelte';

	import Spacer from '$lib/stack/Spacer.svelte';
	import VStack from '$lib/stack/VStack.svelte';
	import { getContext } from 'svelte';
	import GridItem from '$lib/Grid/GridItem.svelte';
	const common = getContext('common');

	const onGitHubClicked = (e) => window.open('https://github.com/Blaise1030/Svelte-UI', '_blank');
	const onGetStartedClicked = (e) => (window.location.href = '/components');
	const features = [
		{
			title: 'Developer Experience',
			description: 'Boost your popularity when writing Svelte Apps.',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" focusable="false" class="chakra-icon css-1snx50u" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path></svg>'
		},
		{
			title: 'Composable',
			description: 'Designed with composition in mind. Compose new components with ease.',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1snx50u" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
		},
		{
			title: 'Themeable',
			description: 'Customize any part of our components to match your design needs.',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1snx50u" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 002.5-2.5c0-.61-.23-1.2-.64-1.67a.528.528 0 01-.13-.33c0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"></path></svg>'
		}
	];
</script>

<Box
	as="nav"
	sp={{
		bg: $common.useColorMode('white', 'gray.800'),
		borderBottom: '1px solid',
		borderColor: 'gray.200',
		zIndex: '10',
		pos: 'fixed',
		w: '100%',
		left: '0',
		top: '0'
	}}
>
	<HStack sp={{ w: '100%' }}>
		<Box sp={{ px: '4', py: '4' }}>
			<HStack sp={{ justify: 'center' }}>
				<img src={icon} alt="logo" />
				<Box
					as="span"
					sp={{
						color: $common.useColorMode('gray.700', 'white'),
						fontFamily: 'heading',
						fontWeight: 'bold',
						fontSize: '2xl'
					}}
				>
					Svelte-UI
				</Box>
			</HStack>
		</Box>
		<Spacer />
		<Box sp={{ px: '3', py: '4' }}>
			<HStack sp={{ gap: '3' }}>
				<Button size="lg" on:click={$common.toggleTheme()}>
					{#if !$common.isDarkMode}
						<span class="material-icons"> light_mode </span>
					{:else}
						<span class="material-icons"> dark_mode </span>
					{/if}
				</Button>
				<Button
					variant="solid"
					size="lg"
					on:click={$common.toggleTheme()}
					sp={{ bg: 'white', color: 'black', border: '1px solid', borderColor: 'gray.300' }}
				>
					<span slot="left-icon" class="material-icons" style="color: red; margin-bottom:-1px">
						favorite
					</span>
					<span>Buy Me Coffee</span>
				</Button>
			</HStack>
		</Box>
	</HStack>
</Box>

<Box as="main">
	<Box as="section" sp={{ h: '100vh', w: '100vw' }}>
		<Center>
			<VStack sp={{ align: 'center', textAlign: 'center', justify: 'center' }}>
				<Box
					as="span"
					sp={{
						color: $common.useColorMode('gray.700', 'white'),
						fontSize: ['3xl', '3xl', '6xl'],
						fontFamily: 'heading',
						fontWeight: 'black'
					}}
					>Create accessible Svelte
					<br />
					Apps
					<Box as="span" sp={{ color: $common.useColorMode('teal.600', 'teal.300') }}
						>with speed</Box
					>
				</Box>
				<Box
					as="p"
					sp={{
						color: $common.useColorMode('gray.500', 'gray.400'),
						w: ['80%', '60%', '50%'],
						fontSize: ['lg', 'xl', '2xl'],
						p: '2'
					}}
				>
					Svelte UI is a simple, modular and accessible component library that gives you the
					building blocks you need to build your Svelte applications.
				</Box>
				<Stack
					sp={{
						direction: ['column', 'row', 'row'],
						justify: 'center',
						align: 'center',
						w: '90%',
						gap: '2',
						p: '6'
					}}
				>
					<Button
						on:click={onGetStartedClicked}
						sp={{ px: '50px', py: '30px', w: ['100%', 'auto', 'auto'] }}
						colorScheme="teal"
						size="lg"
					>
						Start Now
					</Button>
					<Button
						on:click={onGitHubClicked}
						sp={{ px: '50px', py: '30px', w: ['100%', 'auto', 'auto'] }}
						size="lg"
					>
						GitHub
					</Button>
				</Stack>
			</VStack>
		</Center>
	</Box>

	<Box
		as="section"
		sp={{
			bg: $common.useColorMode('gray.50', 'gray.900'),
			h: ['auto', 'auto', '100vh'],
			w: '100vw',
			py: '14'
		}}
	>
		<Center>
			<VStack
				sp={{
					color: $common.useColorMode('gray.500', 'gray.300'),
					textAlign: 'center',
					justify: 'center',
					align: 'center'
				}}
			>
				<Box
					sp={{
						color: $common.useColorMode('gray.700', 'white'),
						fontSize: ['3xl', '3xl', '5xl'],
						m: '0'
					}}
					as="h3">An experience you'd expect<br /> from a design system</Box
				>
				<Box
					as="p"
					sp={{
						color: $common.useColorMode('gray.500', 'gray.400'),
						w: ['80%', '60%', '50%'],
						fontSize: ['lg', '2xl', '2xl'],
						p: '2'
					}}
				>
					Opinionated and designed for daily use.
				</Box>
				<Grid
					sp={{
						gridTemplateColumns: 'repeat(3,1fr)',
						w: ['90%', '100%', '80%'],
						gridGap: '8'
					}}
				>
					{#each features as feature}
						<GridItem
							sp={{
								bg: $common.useColorMode('white', 'gray.800'),
								colSpan: ['3', '3', '1'],
								border: $common.useColorMode('1px solid', 'none'),
								borderColor: 'gray.300',
								borderRadius: 'lg',
								shadow: 'sm',
								p: '10'
							}}
						>
							<VStack sp={{ align: 'flex-start', textAlign: 'start' }}>
								<Box
									sp={{
										bg: 'teal.400',
										color: 'white',
										p: '4',
										borderRadius: 'full',
										boxSize: '20px'
									}}
								>
									<Center>
										{@html feature.icon}
									</Center>
								</Box>
								<Box sp={{ fontSize: 'xl', fontWeight: 'bold', my: '3', mt: '5' }}>
									{feature.title}
								</Box>
								<Box sp={{ fontSize: 'xl' }}>{feature.description}</Box>
							</VStack>
						</GridItem>
					{/each}
				</Grid>
				<Box as="footer" sp={{ pt: '10', textAlign: 'center', h: 'auto' }}>
					<Center>
						<Button
							on:click={() => window.open('https://github.com/Blaise1030', '_blank')}
							sp={{ fontSize: 'md', color: 'gray.500', fontWeight: '300' }}
							variant="link"
						>
							<img
								src="https://img.icons8.com/material-outlined/24/808080/link--v1.png"
								slot="left-icon"
								alt="link"
							/>Built with care by Blaise 2022
						</Button>
					</Center>
				</Box>
			</VStack>
		</Center>
	</Box>
</Box>
