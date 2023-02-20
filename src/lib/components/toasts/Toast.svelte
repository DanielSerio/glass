<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import { fade } from 'svelte/transition';

	export let message: string;
	export let mode: 'success' | 'warning' | 'danger' | 'default' = 'default';

	export let classes: Partial<Classes<'root' | 'container'>> = {};
</script>

<div
	transition:fade
	class={classNames(`s-glass-toast-item-root ${mode}`, () =>
		classes && classes.root ? classes.root : null
	)}
>
	<div
		class={classNames(`s-glass-toast-item-container`, () =>
			classes && classes.container ? classes.container : null
		)}
	>
		{message}
	</div>
</div>
