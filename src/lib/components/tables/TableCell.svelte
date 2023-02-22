<script lang="ts">
	export let tag: 'td' | 'th' = 'td';
</script>

<svelte:element this={tag} class="s-glass-table-cell-root">
	<div class="s-glass-table-cell-container">
		<slot />
	</div>
</svelte:element>
