<script lang="ts">
	import type { Classes, MinimizableSize } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import '../../scss/module/layout/layout.scss';
	import '../../scss/module/layout/theme.scss';

	export let classes: Partial<Classes<'root' | 'content'>> | undefined = undefined;
	export let headerHeight: number = 60;
	export let footerHeight: number = 400;
	export let heroHeight: number = 600;
	export let headerPosition: 'absolute' | 'fixed' = 'absolute';
	export let asideWidth: MinimizableSize = {
		min: 38,
		max: 238
	};
	export let theme: 'light' | 'dark' | 'custom' = 'light';

	let asideIsOpen = true;

	$: contentMarginStyle = () => {
		let value: string = `margin-top:${headerHeight}px;`;

		if ($$slots.aside) {
			value += `margin-left:${asideIsOpen ? asideWidth.max : asideWidth.min}px`;
		}

		return value;
	};

	let openAsideMenu = () => (asideIsOpen = true);
	let closeAsideMenu = () => (asideIsOpen = false);
	let toggleAsideMenu = () => (asideIsOpen = !asideIsOpen);
</script>

<div
	class={classNames(`s-glass-layout-root ${theme} ${$$slots.aside ? 'has-aside' : ''}`, () =>
		classes ? classes.root : null
	)}
>
	<slot name="header" height={headerHeight} {toggleAsideMenu} position={headerPosition} />
	<slot
		name="aside"
		{headerHeight}
		{headerPosition}
		width={asideWidth}
		isOpen={asideIsOpen}
		closeMenu={closeAsideMenu}
		openMenu={openAsideMenu}
	/>
	<div
		class={classNames('s-glass-content', () => (classes ? classes.content : null))}
		style={contentMarginStyle()}
	>
		<slot name="hero" height={heroHeight} />
		<slot />
		<slot name="footer" height={footerHeight} />
	</div>
</div>
