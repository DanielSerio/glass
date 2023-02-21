<script lang="ts">
	import { Page } from '$lib/components/layout';
	import { Button } from '$lib/components/buttons';
	import { Toasts } from '$lib/components/toasts';
	import { useToasts } from '$lib/hooks';

	const { addToastItem, items } = useToasts({});
</script>

<Page>
	<h1>Layout</h1>
	<Button href="#">Link Button</Button>
	<Button color="primary" on:click={() => addToastItem({ message: 'default' })}>Add Toast</Button>
	<Toasts items={$items} />
</Page>
