import { writable, type Writable } from 'svelte/store';

export interface UseToasts {
	addToastItem: (item: App.ToastItemParams) => void;
	items: Writable<App.ToastStoreItem[]>;
}

export interface UseToastsConfig {
	displayTime?: number;
}

export default function useToasts({ displayTime }: UseToastsConfig): UseToasts {
	const store = writable<App.ToastStoreItem[]>([]);

	const addToastItem = ({ message, mode }: App.ToastItemParams) => {
		const now = new Date();
		let defaultMode: 'default' | 'success' | 'warning' | 'danger' = 'default';

		if (mode) defaultMode = mode;

		const item: App.ToastStoreItem = {
			message,
			mode: defaultMode,
			timestamp: now
		};

		store.update((items: App.ToastStoreItem[]) => {
			return [...items, item];
		});

		if (typeof window !== 'undefined') {
			setTimeout(() => {
				store.update((items: App.ToastStoreItem[]) => {
					const index: number = [...items].findIndex((i) => {
						return (
							i.message === item.message &&
							i.timestamp.toString() === item.timestamp.toString() &&
							i.mode === item.mode
						);
					});
					items.splice(index, 1);

					return [...items];
				});
			}, displayTime || 10000);
		}
	};

	return {
		items: store,
		addToastItem
	};
}
