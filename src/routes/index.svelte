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
	import Button from '$lib/Button/Button.svelte';

	const sampleArray = [1, 23, 4, 56, 6];
</script>

<!-- <Wrap sp={{ justify: 'left' }}>
	<Button size="xs" colorScheme="teal" isFullWidth>THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="sm" colorScheme="blue">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="md" colorScheme="purple">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="lg" colorScheme="red">THis is tnew</Button>
</Wrap>
<br />
<Wrap sp={{ justify: 'left' }}>
	<Button size="xs" variant="ghost" colorScheme="teal">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="sm" variant="ghost" colorScheme="blue">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="md" variant="ghost" colorScheme="purple">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="lg" variant="ghost" colorScheme="red">THis is tnew</Button>
</Wrap>

<br />
<Wrap sp={{ justify: 'left' }}>
	<Button size="xs" variant="outline" colorScheme="teal">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="sm" variant="outline" colorScheme="blue">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="md" variant="outline" colorScheme="purple">THis is tnew</Button>
	<div style="width: 20px;" />
	<Button size="lg" variant="outline" colorScheme="red">THis is tnew</Button>
	<div style="width: 20px;" />
</Wrap>

<br />
<Wrap sp={{ justify: 'left' }}>
	<Button size="xs" variant="link" colorScheme="teal">THis is tnew</Button>
	<Button size="sm" variant="link" colorScheme="blue">THis is tnew</Button>
	<Button size="md" variant="link" colorScheme="purple">THis is tnew</Button>
	<Button size="lg" variant="link" colorScheme="red">THis is tnew</Button>
</Wrap> -->
