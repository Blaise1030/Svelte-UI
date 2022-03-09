type AlignSelection =
	| 'stretch'
	| 'center'
	| 'flex-start'
	| 'flex-end'
	| 'space-between'
	| 'space-around'
	| 'initial'
	| 'inherit';

type JustifySelection =
	| 'stretch'
	| 'center'
	| 'flex-start'
	| 'flex-end'
	| 'space-between'
	| 'space-around'
	| 'initial'
	| 'inherit';

type StackSelection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

type StackProps = Partial<{
	align: AlignSelection | AlignSelection[];
	direction: StackSelection | StackSelection[];
	justify: JustifySelection | JustifySelection[];
}>;

export default StackProps;
