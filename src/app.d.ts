// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		type SizeName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		type UIColorName =
			| 'primary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'default'
			| 'teal'
			| 'green'
			| 'yellow'
			| 'orange';

		interface ToastItemParams {
			mode?: 'success' | 'warning' | 'danger' | 'default';
			message: string;
		}

		interface ToastStoreItem extends ToastItemParams {
			mode: 'success' | 'warning' | 'danger' | 'default';
			timestamp: Date | string;
		}
	}
}

export {};
