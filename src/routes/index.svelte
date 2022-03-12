<script lang="ts">
	import VStack from '$lib/stack/VStack.svelte';
	import Center from '$lib/box/Center.svelte';
	import Stack from '$lib/stack/Stack.svelte';
	import Button from '$lib/Button/Button.svelte';
	import HStack from '$lib/stack/HStack.svelte';
	import Spacer from '$lib/stack/Spacer.svelte';
	import Grid from '$lib/grid/Grid.svelte';
	import GridItem from '$lib/grid/GridItem.svelte';
	import { slide } from 'svelte/transition';
	import Box from '../lib/box/Box.svelte';

	let openModal = true;
	const onGitHubClicked = (e) => window.open('https://github.com/Blaise1030/Svelte-UI', '_blank');
	const onCloseModal = (e) => (openModal = false);

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

<!-- Navbar -->
<HStack
	sp={{
		borderBottom: '1px solid',
		borderColor: 'gray.200',
		pos: 'fixed',
		bg: 'white',
		left: '0',
		top: '0'
	}}
>
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

{#if openModal}
	<Box
		sp={{
			pos: 'fixed',
			left: '3',
			bottom: '3',
			zIndex: '10',
			bg: 'white',
			border: '1px solid',
			borderColor: 'gray.200',
			borderRadius: 'md',
			shadow: 'md',
			p: '3'
		}}
	>
		<VStack sp={{ w: 'full' }}>
			<Button
				on:click={onCloseModal}
				sp={{ textAlign: 'end', textDecoration: 'underline', fontWeight: '300', fontSize: 'sm' }}
				variant="link"
			>
				Close
			</Button>
			<Box sp={{ my: '4', mx: '4', fontSize: 'lg', color: 'gray.500', maxW: '300px' }}
				>Still Work In Progress. See, We don't have 'close' IconButton yet for this modal.
			</Box>
			<Button
				on:click={() => window.open('mailto:blaisetiong1030@gmail.com')}
				sp={{ ml: 'auto' }}
				variant="solid">Join Me</Button
			>
		</VStack>
	</Box>
{/if}

<!-- Body -->
<Box sp={{ h: '100vh' }}>
	<Center>
		<VStack sp={{ justify: 'center', p: '2' }}>
			<VStack
				sp={{
					fontSize: ['4xl', '4xl', '5xl'],
					fontFamily: 'heading',
					fontWeight: 'black',
					textAlign: 'center',
					justify: 'center'
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

<!-- Features -->
<Box
	sp={{ h: ['auto', 'auto', '100vh'], bg: 'gray.50', p: ['5', '5', '0'], pt: ['10', '10', '0'] }}
>
	<Center>
		<Box
			sp={{
				color: 'gray.700',
				fontFamily: 'heading',
				fontWeight: 'black',
				textAlign: 'center',
				fontSize: ['3xl', '4xl', '5xl']
			}}
		>
			A Chakra UI experience for Svelte.
		</Box>
		<Box
			sp={{
				maxW: ['80%', '50%', '50%'],
				textAlign: 'center',
				fontFamily: 'body',
				color: 'gray.500',
				fontSize: 'lg',
				my: '8'
			}}>Opinionated and designed for easy use</Box
		>

		<Grid
			sp={{
				gridTemplateColumns: 'repeat(3,1fr)',
				w: ['100%', '100%', '80%'],
				gridGap: '8'
			}}
		>
			{#each features as feature}
				<GridItem
					sp={{
						gridColSpan: ['3', '3', '1'],
						border: '1px solid',
						borderColor: 'gray.300',
						borderRadius: 'lg',
						shadow: 'sm',
						bg: 'white',
						p: '10'
					}}
				>
					<VStack>
						<Box
							sp={{ bg: 'teal.400', color: 'white', p: '4', borderRadius: 'full', boxSize: 'lg' }}
						>
							<Center>
								{@html feature.icon}
							</Center>
						</Box>
						<Box sp={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.500', my: '3', mt: '5' }}>
							{feature.title}
						</Box>
						<Box sp={{ fontSize: 'xl', color: 'gray.500' }}>{feature.description}</Box>
					</VStack>
				</GridItem>
			{/each}
		</Grid>
	</Center>
</Box>

<!-- Footer -->
<Box sp={{ py: '8', textAlign: 'center' }}>
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
