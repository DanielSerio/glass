<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';

	export let href: string | undefined = undefined;
	export let classes: Partial<Classes<'root' | 'container'>> = {};
	export let size: App.SizeName = 'md';
	export let color: App.UIColorName = 'default';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	type={href ? undefined : 'button'}
	class={classNames(`s-glass-btn-root btn ${size} ${color}`, () =>
		classes && classes.root ? classes.root : null
	)}
	on:click
>
	<div
		class={classNames('s-glass-btn-container', () =>
			classes && classes.container ? classes.container : null
		)}
	>
		<slot />
	</div>
</svelte:element>
