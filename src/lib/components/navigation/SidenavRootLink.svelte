<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import { page } from '$app/stores';
	export let isOpen: boolean;
	export let href: string;
	export let classes: Partial<Classes<'root' | 'container' | 'text' | 'icon'>> = {};

	$: isActive = href === $page.url.pathname;
</script>

<a
	class={classNames(
		`s-glass-sidenav-root-link-root ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}`,
		() => (classes && classes.root ? classes.root : null)
	)}
	{href}
>
	<div
		class={classNames(`s-glass-sidenav-root-link-container`, () =>
			classes && classes.container ? classes.container : null
		)}
	>
		<span class={classNames('text', () => (classes && classes.text ? classes.text : null))}>
			<slot />
		</span>
		{#if $$slots.icon}
			<span class={classNames('icon', () => (classes && classes.text ? classes.text : null))}>
				<slot name="icon" />
			</span>
		{/if}
	</div>
</a>
