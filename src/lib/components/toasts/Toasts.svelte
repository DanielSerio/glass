<script lang="ts">
	import type { Classes } from '$lib/types/ui';
	import { classNames } from '$lib/utilities/class-names';
	import Toast from './Toast.svelte';
	import '../../scss/module/toasts/layout.scss';

	export let classes: Partial<Classes<'root' | 'container' | 'item-root' | 'item-container'>> = {};
	export let items: App.ToastStoreItem[] = [
		{
			mode: 'danger',
			message: 'danger',
			timestamp: new Date()
		},
		{
			mode: 'warning',
			message: 'warning',
			timestamp: new Date()
		},
		{
			mode: 'success',
			message: 'success',
			timestamp: new Date()
		},
		{
			mode: 'default',
			message: 'default',
			timestamp: new Date()
		}
	];
</script>

{#if items && items.length}
	<div
		class={classNames(`s-glass-toast-root`, () => (classes && classes.root ? classes.root : null))}
	>
		<div
			class={classNames(`s-glass-toast-container`, () =>
				classes && classes.root ? classes.root : null
			)}
		>
			<span />
			{#each items as toast}
				<Toast message={toast.message} mode={toast.mode} />
			{/each}
		</div>
	</div>
{/if}
