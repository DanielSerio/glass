<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import '../../scss/module/loader/layout.scss';

	export let size: 14 | 28 | 56 | 112 = 14;
	export let color: App.UIColorName | 'white' | 'black' = 'default';
	export let classes: Partial<
		Classes<'root' | 'container' | 'pane' | 'pane-1' | 'pane-2' | 'pane-3' | 'pane-4'>
	> = {};

	let gapSize = Math.floor(size / (size === 14 ? 7 : 14));
	let halfGapSize: number = Math.floor(gapSize / 2);
	let paneStyleString = `min-width: calc(50% - ${halfGapSize}px);min-height: calc(50% - ${halfGapSize}px);border-radius:${halfGapSize}px;`;
</script>

<div
	class={classNames(`s-glass-loader-root`, () => (classes && classes.root ? classes.root : null))}
>
	<div
		style={`height:${size}px;width:${size}px;gap:${gapSize}px;`}
		class={classNames(`s-glass-loader-container`, () =>
			classes && classes.container ? classes.container : null
		)}
	>
		<div
			style={paneStyleString}
			class={classNames(
				`s-glass-loader-pane ${color} ${classNames(`s-glass-loader-pane-1`, () =>
					classes && classes['pane-1'] ? classes['pane-1'] : null
				)}`,
				() => (classes && classes.pane ? classes.pane : null)
			)}
		/>
		<div
			style={paneStyleString}
			class={classNames(
				`s-glass-loader-pane ${color} ${classNames(`s-glass-loader-pane-2`, () =>
					classes && classes['pane-2'] ? classes['pane-2'] : null
				)}`,
				() => (classes && classes.pane ? classes.pane : null)
			)}
		/>
		<div
			style={paneStyleString}
			class={classNames(
				`s-glass-loader-pane ${color} ${classNames(`s-glass-loader-pane-3`, () =>
					classes && classes['pane-3'] ? classes['pane-3'] : null
				)}`,
				() => (classes && classes.pane ? classes.pane : null)
			)}
		/>
		<div
			style={paneStyleString}
			class={classNames(
				`s-glass-loader-pane ${color} ${classNames(`s-glass-loader-pane-4`, () =>
					classes && classes['pane-4'] ? classes['pane-4'] : null
				)}`,
				() => (classes && classes.pane ? classes.pane : null)
			)}
		/>
	</div>
</div>
