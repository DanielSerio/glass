<script lang="ts">
	import { onMount } from 'svelte';
	import { object_without_properties } from 'svelte/internal';
	let thead: HTMLTableSectionElement;
	let tbody: HTMLTableSectionElement;
	import '../../scss/module/tables/layout.scss';

	const getColumn = (
		thead: HTMLTableSectionElement,
		tbody: HTMLTableSectionElement,
		index: number
	): HTMLTableCellElement[] => {
		const cells: HTMLTableCellElement[] = [
			thead.children[0].children[index] as HTMLTableCellElement
		];

		for (const row of tbody.children) {
			cells.push(row.children.item(index) as HTMLTableCellElement);
		}

		return cells;
	};

	const getWidestColumnWidth = (columns: HTMLTableCellElement[]): number => {
		return Math.max(...[...columns].map((c) => c.clientWidth));
	};

	let columnWidths: {
		[key: number]: number;
	} = {};

	onMount(() => {
		if (thead && tbody) {
			const theadCells = thead.children[0].children;

			for (let i = 0; i < theadCells.length; i += 1) {
				columnWidths[i] = getWidestColumnWidth(getColumn(thead, tbody, i));
			}

			console.log(columnWidths);
		}
	});

	$: if (Object.keys(columnWidths) && Object.keys(columnWidths).length) {
		for (const row of tbody.children) {
			for (let i = 0; i < row.children.length; i += 1) {
				(row.children[i] as HTMLElement).style.minWidth = `${columnWidths[i]}px`;
			}
		}
	}
</script>

<div class="s-glass-table-root">
	<div class="s-glass-table-container">
		<table class="s-glass-table">
			<thead bind:this={thead} class="s-glass-thead s-glass-table-section">
				<slot name="thead" />
			</thead>
			<tbody bind:this={tbody} class="s-glass-tbody s-glass-table-section">
				<slot />
			</tbody>
		</table>
	</div>
</div>
