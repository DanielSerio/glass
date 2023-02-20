<script lang="ts">
	import type { MinimizableSize } from '$lib/types/ui';
	import '../../scss/module/sidenav/layout.scss';

	export let isOpen: boolean;
	export let width: MinimizableSize;
	export let headerHeight: number;
	export let headerPosition: 'absolute' | 'fixed';
</script>

<aside class="s-glass-sidenav-root" style={`height:calc(100% - ${headerHeight}px);`}>
	<nav
		class="s-glass-sidenav-nav"
		style={`width:${isOpen ? width.max : width.min}px;top:${
			headerPosition === 'fixed' ? headerHeight : 0
		}px;`}
	>
		<slot />
	</nav>
</aside>
