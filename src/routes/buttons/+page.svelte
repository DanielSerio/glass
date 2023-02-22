<script lang="ts">
	import { Button } from '$lib/components/buttons';
	import { Page } from '$lib/components/layout';
	import { Table } from '$lib/components/tables';
	import TableCell from '$lib/components/tables/TableCell.svelte';
	const sizes: App.SizeName[] = ['xs', 'sm', 'md', 'lg', 'xl'];
	const colors: App.UIColorName[] = [
		'default',
		'info',
		'primary',
		'success',
		'warning',
		'danger',
		'green',
		'teal',
		'yellow',
		'orange'
	];
</script>

<Page>
	<article>
		<section id="config">
			<h1>Buttons</h1>
			<p>
				Buttons are simple in glass. Buttons can be given an href and converted to an <code
					>&lt;a /&gt;</code
				>
				element.
			</p>
		</section>
		<section id="config">
			<h2 class="section-title">Size</h2>
			<p>
				button sizes are defined as: {#each sizes as size}<code style="margin: 0 2px;">{size}</code
					>{/each}
			</p>
			<div class="button-row">
				{#each sizes as size}
					<Button {size}>{size}</Button>
				{/each}
			</div>
			<h3 class="section-title">Color</h3>
			<p>
				button colors are defined as: {#each colors as color}<code style="margin: 0 2px;"
						>{color}</code
					>{/each}
			</p>
			<div class="button-row">
				{#each colors as color}
					<Button {color}>{color}</Button>
				{/each}
			</div>
			<h4 class="section-title">Classes</h4>
			<Table>
				<svelte:fragment slot="thead">
					<tr>
						<TableCell tag="th">Class name</TableCell>
						<TableCell tag="th">Element description</TableCell>
					</tr>
				</svelte:fragment>
				<tr>
					<TableCell><code>root</code></TableCell>
					<TableCell><p>root container</p></TableCell>
				</tr>
				<tr>
					<TableCell><code>container</code></TableCell>
					<TableCell><p>inner container</p></TableCell>
				</tr>
			</Table>
		</section>
	</article>
</Page>
