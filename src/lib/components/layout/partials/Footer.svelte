<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	export let height: number;
	export let classes: Partial<Classes<'root' | 'container'>> | undefined = undefined;
</script>

<footer
	id="footer"
	class={classNames('s-glass-footer-root', () => (classes?.root ? classes.root : null))}
>
	<section
		style={`height:${height}px;`}
		class={classNames('s-glass-footer-container', () =>
			classes?.container ? classes.container : null
		)}
	>
		<slot />
	</section>
</footer>
