export function classNames(base: string, construct: () => string | undefined | null): string {
	const constructed: string = construct() || '';
	return `${base} ${constructed}`.trimEnd();
}
