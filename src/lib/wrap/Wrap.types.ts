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

type WrapProps = Partial<{
	align: AlignSelection | AlignSelection[];
	direction: StackSelection | StackSelection[];
	justify: JustifySelection | JustifySelection[];
	gap: string | string[];
}>;

export default WrapProps;
