<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import '../../../scss/module/header/layout.scss';
	export let height: number;
	export let position: 'fixed' | 'absolute' = 'absolute';
	export let classes: Partial<Classes<'root' | 'container'>> | undefined = undefined;
</script>

<header
	id="header"
	class={classNames('s-glass-header-root', () => (classes?.root ? classes.root : null))}
	style={position === 'fixed' ? `position:fixed;` : undefined}
>
	<section
		style={`height:${height}px;`}
		class={classNames('s-glass-header-container', () =>
			classes?.container ? classes.container : null
		)}
	>
		<slot />
	</section>
</header>
