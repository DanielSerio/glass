<script lang="ts">
	import { Footer, Layout, Header } from '$lib/components/layout';
	import { SideNav } from '$lib/components/navigation';
	import SidenavRootLink from '$lib/components/navigation/SidenavRootLink.svelte';
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
			<button class="menu-btn" on:click={!isOpen ? openMenu : closeMenu}>
				<i class="bi bi-list" />
			</button>
			<div class="sidenav-links">
				<SidenavRootLink href="/layout" {isOpen}>
					<small>Layout</small>
					<svelte:fragment slot="icon">
						<i class="bi bi-grid" />
					</svelte:fragment>
				</SidenavRootLink>
				<SidenavRootLink href="/buttons" {isOpen}>
					<small>Buttons</small>
					<svelte:fragment slot="icon">
						<i class="bi bi-hand-index" />
					</svelte:fragment>
				</SidenavRootLink>
			</div>
		</SideNav>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer" let:height>
		<Footer {height}>Footer component</Footer>
	</svelte:fragment>
</Layout>
