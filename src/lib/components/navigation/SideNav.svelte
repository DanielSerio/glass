<script lang="ts">
	import type { MinimizableSize } from '$lib/types/ui';
	import '../../scss/module/sidenav/layout.scss';
	import '../../scss/module/sidenav/theme.scss';

	export let isOpen: boolean;
	export let width: MinimizableSize;
	export let headerHeight: number;
	export let headerPosition: 'absolute' | 'fixed';
</script>

<aside
	class="s-glass-sidenav-root"
	style={`height:calc(100% - ${headerHeight}px);top:${headerHeight}px;`}
>
	<nav
		class="s-glass-sidenav-nav {isOpen ? 'open' : ''}"
		style={`width:${isOpen ? width.max : width.min}px;top:${
			headerPosition === 'fixed' ? headerHeight : 0
		}px;`}
	>
		<slot />
	</nav>
</aside>
