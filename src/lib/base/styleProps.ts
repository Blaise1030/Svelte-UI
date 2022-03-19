export type IStyleInterface = IBaseStyleInterface & IPseudoStyleInterface;
export type IPseudoInterfaceProps = Exclude<Partial<IBaseStyleInterface>, IPseudoStyleInterface>;
export type SystemStyleProps = string | string[];
export interface IBaseStyleInterface {
	cursor: SystemStyleProps;
	gridColSpan: SystemStyleProps;
	gridRowSpan: SystemStyleProps;
	transition: SystemStyleProps;
	d: SystemStyleProps;
	m: SystemStyleProps;
	p: SystemStyleProps;
	w: SystemStyleProps;
	h: SystemStyleProps;
	bg: SystemStyleProps;
	mt: SystemStyleProps;
	mr: SystemStyleProps;
	me: SystemStyleProps;
	mb: SystemStyleProps;
	ml: SystemStyleProps;
	ms: SystemStyleProps;
	mx: SystemStyleProps;
	my: SystemStyleProps;
	pt: SystemStyleProps;
	pr: SystemStyleProps;
	pe: SystemStyleProps;
	pb: SystemStyleProps;
	pl: SystemStyleProps;
	ps: SystemStyleProps;
	px: SystemStyleProps;
	py: SystemStyleProps;
	pos: SystemStyleProps;
	top: SystemStyleProps;
	blur: SystemStyleProps;
	flex: SystemStyleProps;
	left: SystemStyleProps;
	minW: SystemStyleProps;
	maxW: SystemStyleProps;
	minH: SystemStyleProps;
	maxH: SystemStyleProps;
	order: SystemStyleProps;
	right: SystemStyleProps;
	color: SystemStyleProps;
	shadow: SystemStyleProps;
	zIndex: SystemStyleProps;
	border: SystemStyleProps;
	bgClip: SystemStyleProps;
	bgSize: SystemStyleProps;
	filter: SystemStyleProps;
	invert: SystemStyleProps;
	bottom: SystemStyleProps;
	borderX: SystemStyleProps;
	borderY: SystemStyleProps;
	opacity: SystemStyleProps;
	gridRow: SystemStyleProps;
	bgImage: SystemStyleProps;
	gridGap: SystemStyleProps;
	boxSize: SystemStyleProps;
	bgColor: SystemStyleProps;
	overflow: SystemStyleProps;
	flexWrap: SystemStyleProps;
	flexGrow: SystemStyleProps;
	gridArea: SystemStyleProps;
	bgRepeat: SystemStyleProps;
	contrast: SystemStyleProps;
	saturate: SystemStyleProps;
	fontSize: SystemStyleProps;
	borderTop: SystemStyleProps;
	borderEnd: SystemStyleProps;
	textAlign: SystemStyleProps;
	fontStyle: SystemStyleProps;
	overflowX: SystemStyleProps;
	overflowY: SystemStyleProps;
	flexBasis: SystemStyleProps;
	alignSelf: SystemStyleProps;
	hueRotate: SystemStyleProps;
	textShadow: SystemStyleProps;
	dropShadow: SystemStyleProps;
	borderLeft: SystemStyleProps;
	bgGradient: SystemStyleProps;
	alignItems: SystemStyleProps;
	flexShrink: SystemStyleProps;
	gridColumn: SystemStyleProps;
	bgPosition: SystemStyleProps;
	brightness: SystemStyleProps;
	gridRowGap: SystemStyleProps;
	fontFamily: SystemStyleProps;
	fontWeight: SystemStyleProps;
	lineHeight: SystemStyleProps;
	borderStyle: SystemStyleProps;
	borderWidth: SystemStyleProps;
	borderRight: SystemStyleProps;
	borderStart: SystemStyleProps;
	justifySelf: SystemStyleProps;
	borderColor: SystemStyleProps;
	backdropBlur: SystemStyleProps;
	borderRadius: SystemStyleProps;
	borderBottom: SystemStyleProps;
	alignContent: SystemStyleProps;
	justifyItems: SystemStyleProps;
	gridAutoFlow: SystemStyleProps;
	gridAutoRows: SystemStyleProps;
	bgAttachment: SystemStyleProps;
	textTransform: SystemStyleProps;
	verticalAlign: SystemStyleProps;
	flexDirection: SystemStyleProps;
	gridColumnGap: SystemStyleProps;
	letterSpacing: SystemStyleProps;
	borderTopStyle: SystemStyleProps;
	borderEndStyle: SystemStyleProps;
	borderTopWidth: SystemStyleProps;
	borderEndWidth: SystemStyleProps;
	textDecoration: SystemStyleProps;
	justifyContent: SystemStyleProps;
	backdropFilter: SystemStyleProps;
	backdropInvert: SystemStyleProps;
	borderTopColor: SystemStyleProps;
	borderEndColor: SystemStyleProps;
	borderTopRadius: SystemStyleProps;
	borderEndRadius: SystemStyleProps;
	borderLeftStyle: SystemStyleProps;
	borderLeftWidth: SystemStyleProps;
	gridAutoColumns: SystemStyleProps;
	borderLeftColor: SystemStyleProps;
	borderLeftRadius: SystemStyleProps;
	borderRightStyle: SystemStyleProps;
	borderStartStyle: SystemStyleProps;
	borderStartWidth: SystemStyleProps;
	borderRightWidth: SystemStyleProps;
	gridTemplateRows: SystemStyleProps;
	backdropContrast: SystemStyleProps;
	backdropSaturate: SystemStyleProps;
	borderRightColor: SystemStyleProps;
	borderStartColor: SystemStyleProps;
	borderRightRadius: SystemStyleProps;
	borderStartRadius: SystemStyleProps;
	borderBottomStyle: SystemStyleProps;
	borderBottomWidth: SystemStyleProps;
	gridTemplateAreas: SystemStyleProps;
	backdropHueRotate: SystemStyleProps;
	borderBottomColor: SystemStyleProps;
	borderTopEndRadius: SystemStyleProps;
	borderBottomRadius: SystemStyleProps;
	backdropBrightness: SystemStyleProps;
	borderTopLeftRadius: SystemStyleProps;
	gridTemplateColumns: SystemStyleProps;
	borderTopStartRadius: SystemStyleProps;
	borderTopRightRadius: SystemStyleProps;
	borderBottomEndRadius: SystemStyleProps;
	borderBottomLeftRadius: SystemStyleProps;
	borderBottomRightRadius: SystemStyleProps;
	borderBottomStartRadius: SystemStyleProps;
}
export interface IPseudoStyleInterface {
	_checked: IPseudoInterfaceProps;
	_active: IPseudoInterfaceProps;
	_hover: IPseudoInterfaceProps;
	_focus: IPseudoInterfaceProps;
	_disabled: IPseudoInterfaceProps;
}
export const styleInterface = (v) => ({
	zIndices: {
		zIndex: `z-index:${v}`
	},
	colors: {
		borderStartColor: `border-inline-start-color:${v}`,
		borderEndColor: `border-inline-end-color:${v}`,
		borderBottomColor: `border-bottom-color:${v}`,
		borderRightColor: `border-right-color:${v}`,
		borderLeftColor: `border-left-color:${v}`,
		borderTopColor: `border-top-color:${v}`,
		bgColor: `background-color:${v}`,
		borderColor: `border-color:${v}`,
		bg: `background:${v}`,
		color: `color:${v}`
	},
	fonts: {
		letterSpacing: `letter-spacing:${v}`,
		lineHeight: `line-height:${v}`,
		fontFamily: `font-family:${v}`,
		fontWeight: `font-weight:${v}`,
		fontSize: `font-size:${v}`
	},
	sizes: {
		w: `width:${v}`,
		h: `height:${v}`,
		minW: `min-width:${v}`,
		maxW: `max-width:${v}`,
		minH: `min-height:${v}`,
		maxH: `max-height:${v}`,
		boxSize: `width:${v}; height:${v}`
	},
	space: {
		m: `margin:${v}`,
		mt: `margin-top:${v}`,
		mr: `margin-right:${v}`,
		me: `margin-inline-end:${v}`,
		mb: `margin-bottom:${v}`,
		ml: `margin-left:${v}`,
		ms: `margin-inline-start:${v}`,
		mx: `margin-inline-start:${v}; margin-inline-end:${v}`,
		my: `margin-top:${v}; margin-bottom:${v}`,
		p: `padding:${v}`,
		pt: `padding-top:${v}`,
		pr: `padding-right:${v}`,
		pe: `padding-inline-end:${v}`,
		pb: `padding-bottom:${v}`,
		pl: `padding-left:${v}`,
		ps: `padding-inline-start:${v}`,
		px: `padding-inline-start:${v}; padding-inline-end:${v}`,
		py: `padding-top:${v}; padding-bottom:${v}`,
		gridGap: `grid-gap:${v}`,
		gridRowGap: `grid-row-gap:${v}`,
		gridColumnGap: `grid-column-gap:${v}`,
		top: `top:${v}`,
		right: `right:${v}`,
		bottom: `bottom:${v}`,
		left: `left:${v}`
	},
	free: {
		transition: `transition:${v}`,
		opacity: `opacity:${v}`,
		bgGradient: `background-image:${v}`,
		bgClip: `background-clip:${v}`,
		textAlign: `text-align:${v}`,
		fontStyle: `font-style:${v}`,
		textTransform: `text-transform:${v}`,
		textDecoration: `text-decoration:${v}`,
		verticalAlign: `vertical-align:${v}`,
		overflow: `overflow:${v}`,
		overflowX: `overflow-x:${v}`,
		overflowY: `overflow-y:${v}`,
		d: `display:${v}`,
		alignItems: `align-items:${v}`,
		alignContent: `align-content:${v}`,
		justifyItems: `justify-items:${v}`,
		justifyContent: `justify-content:${v}`,
		flexWrap: `flex-wrap:${v}`,
		flexDirection: `flex-direction:${v}`,
		flex: `flex:${v}`,
		flexGrow: `flex-grow:${v}`,
		flexShrink: `flex-shrink:${v}`,
		flexBasis: `flex-basis:${v}`,
		justifySelf: `justify-self:${v}`,
		alignSelf: `align-self:${v}`,
		order: `order:${v}`,
		gridColumn: `grid-column:${v}`,
		gridColSpan: `grid-column: span ${v} /  span ${v}`,
		gridRowSpan: `grid-row: span ${v} /  span ${v}`,
		gridRow: `grid-row:${v}`,
		gridArea: `grid-area:${v}`,
		gridAutoFlow: `grid-auto-flow:${v}`,
		gridAutoRows: `grid-auto-rows:${v}`,
		gridAutoColumns: `grid-auto-columns:${v}`,
		gridTemplateRows: `grid-template-rows:${v}`,
		gridTemplateColumns: `grid-template-columns:${v}`,
		gridTemplateAreas: `grid-template-areas:${v}`,
		bgImage: `background-image:${v}`,
		bgSize: `background-size:${v}`,
		bgPosition: `background-position:${v}`,
		bgRepeat: `background-repeat:${v}`,
		bgAttachment: `background-attachment:${v}`,
		pos: `position:${v}`,
		filter: `filter:${v}`,
		brightness: `filter:brightness(${v})`,
		contrast: `filter:${v}`,
		hueRotate: `filter:${v}`,
		invert: `filter:${v}`,
		saturate: `filter:${v}`,
		backdropFilter: `backdrop-filter:${v}`,
		backdropBrightness: `backdrop-filter:${v}`,
		backdropContrast: `backdrop-filter:${v}`,
		backdropHueRotate: `backdrop-filter:${v}`,
		backdropInvert: `backdrop-filter:${v}`,
		backdropSaturate: `backdrop-filter:${v}`,
		cursor: `cursor:${v}`
	},
	borders: {
		border: `border:${v}`,
		borderTop: `border-top:${v}`,
		borderRight: `border-right:${v}`,
		borderEnd: `border-inline-end:${v}`,
		borderBottom: `border-bottom:${v}`,
		borderLeft: `border-left:${v}`,
		borderStart: `border-inline-start:${v}`
	},
	borderWidths: {
		borderStartWidth: `border-inline-start-width:${v}`,
		borderLeftWidth: `border-left-width:${v}`,
		borderTopWidth: `border-top-width:${v}`,
		borderWidth: `border-width:${v}`,
		borderRightWidth: `border-right-width:${v}`,
		borderEndWidth: `border-inline-end-width:${v}`,
		borderBottomWidth: `border-bottom-width:${v}`,
		borderX: `border-left${v}; border-right:${v}`,
		borderY: `border-top${v}; border-bottom:${v}`
	},
	borderStyles: {
		borderStyle: `border-style:${v}`,
		borderTopStyle: `border-top-style:${v}`,
		borderRightStyle: `border-right-style:${v}`,
		borderEndStyle: `border-inline-end-style:${v}`,
		borderBottomStyle: `border-bottom-style:${v}`,
		borderLeftStyle: `border-left-style:${v}`,
		borderStartStyle: `border-inline-start-style:${v}`
	},
	radii: {
		borderRadius: `border-radius:${v}`,
		borderTopLeftRadius: `border-top-left-radius:${v}`,
		borderTopStartRadius: `border-top-left-radius:${v}; border-top-right-radius:${v};`,
		borderTopRightRadius: `border-top-right-radius:${v}`,
		borderTopEndRadius: `border-top-right-radius:${v}; border-top-left-radius:${v}`,
		borderBottomRightRadius: `border-bottom-right-radius:${v}`,
		borderBottomEndRadius: `border-bottom-right-radius:${v}; border-bottom-left-radius:${v}`,
		borderBottomLeftRadius: `border-bottom-left-radius:${v}`,
		borderBottomStartRadius: `border-bottom-left-radius:${v}`,
		borderTopRadius: `border-top-left-radius:${v};border-top-right-radius:${v}`,
		borderRightRadius: `border-top-right-radius:${v}; border-bottom-right-radius:${v}`,
		borderEndRadius: `border-top-right-radius:${v}; border-bottom-right-radius:${v}`,
		borderBottomRadius: `border-bottom-left-radius:${v}; border-bottom-right-radius:${v}`,
		borderLeftRadius: `border-top-left-radius:${v}; border-bottom-left-radius:${v}`,
		borderStartRadius: `border-top-left-radius:${v}; border-bottom-left-radius:${v}`
	},
	shadows: {
		textShadow: `text-shadow:${v}`,
		dropShadow: `filter:${v}`,
		shadow: `box-shadow:${v}`
	},
	blur: {
		blur: `filter:${v}`,
		backdropBlur: `backdrop-filter:${v}`
	}
});

export const systemBreakpoints = (extentions: any) => ({
	breakpoints: [30, 30, 62, 80, 96],
	unit: 'em',
	...extentions
});

export const systemPseudoClass = (extentions: any) => ({
	_active: '&:active',
	_hover: '&:hover',
	_focus: '&:focus',
	_enabled: '&:enable',
	_disabled: '&:disabled',
	...extentions
});
