<script lang="ts">
	import { Footer, Layout, Header } from '$lib/components/layout';
	import { SideNav } from '$lib/components/navigation';
	import '../style.scss';
</script>

<Layout theme="light" headerPosition="fixed">
	<svelte:fragment slot="header" let:position let:height>
		<Header {height} {position}>
			<div class="logo">Glass</div>
		</Header>
	</svelte:fragment>
	<svelte:fragment
		slot="aside"
		let:headerPosition
		let:headerHeight
		let:width
		let:isOpen
		let:openMenu
		let:closeMenu
	>
		<SideNav {headerHeight} {width} {isOpen} {headerPosition}>
			<button on:click={!isOpen ? openMenu : closeMenu}>menu</button>
		</SideNav>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer" let:height>
		<Footer {height}>Footer component</Footer>
	</svelte:fragment>
</Layout>
