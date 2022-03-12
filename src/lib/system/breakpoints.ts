interface IBreakpoints {
	unit: string;
	sm: number;
	md: number;
	lg: number;
	xl: number;
	'2xl': number;
}

export const SystemBreakpoints: IBreakpoints = {
	unit: 'em',
	'2xl': 96,
	sm: 30,
	md: 30,
	lg: 62,
	xl: 80
};

export const generateBreakpoints = (breakpoints: IBreakpoints) => ({
	unit: breakpoints.unit,
	responsiveList: Object.keys(breakpoints)
		.filter((k) => k !== 'unit')
		.sort((key1, key2) => breakpoints[key1] - breakpoints[key2])
		.map((keys) => ({
			val: breakpoints[keys],
			comp: []
		}))
});

export default IBreakpoints;
