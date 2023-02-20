interface ClassNameObjectBase {
	[key: string]: string;
}

export interface MinimizableSize {
	min: number;
	max: number;
}

export type Classes<ClassNames extends string> = ClassNameObjectBase & Record<ClassNames, string>;
