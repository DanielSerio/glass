<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';

	export let sidebar: undefined | 'left' | 'right' = undefined;

	$: rootElement = sidebar ? 'div' : 'main';
	export let classes: Partial<Classes<'root' | 'page-container'>> | undefined = undefined;
</script>

<svelte:element
	this={rootElement}
	id="page"
	class={classNames('s-glass-page', () => (classes?.root ? classes.root : null))}
>
	{#if sidebar === 'left'}
		<slot name="sidebar" />
	{/if}
	<div
		class={classNames('s-glass-page-container', () =>
			classes && classes['page-container'] ? classes['page-container'] : null
		)}
	>
		<slot />
	</div>
	{#if sidebar === 'right'}
		<slot name="sidebar" />
	{/if}
</svelte:element>
