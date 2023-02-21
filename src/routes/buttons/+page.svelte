<script lang="ts">
	import { Button } from '$lib/components/buttons';
	import { Page } from '$lib/components/layout';
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
			<div class="class-table">
				<code>root</code>
				<p>root container</p>
				<code>container</code>
				<p>inner container</p>
			</div>
		</section>
	</article>
</Page>
