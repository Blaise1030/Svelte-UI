<script lang="ts">
	import HStack from '$lib/stack/HStack.svelte';
	import Box from '$lib/base/Box.svelte';
	import Wrap from '$lib/wrap/Wrap.svelte';
	import WrapItem from '$lib/wrap/WrapItem.svelte';
</script>

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
<a href="/components">Next page</a>
