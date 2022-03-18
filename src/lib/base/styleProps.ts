export type IStyleInterface = IBaseStyleInterface & IPseudoStyleInterface;
export type IPseudoInterfaceProps = Exclude<Partial<IBaseStyleInterface>, IPseudoStyleInterface>;
export type SystemStyleProps = string | string[];
export interface IBaseStyleInterface {
	cursor: SystemStyleProps;
	gridColSpan: SystemStyleProps;
	gridRowSpan: SystemStyleProps;
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

export const StyleInterface = {
	zIndices: {
		zIndex: ({ zIndex }) => `z-index:${zIndex}`
	},
	colors: {
		color: ({ color }) => `color:${color}`,
		bg: ({ bg }) => `background:${bg}`,
		bgColor: ({ bgColor }) => `background-color:${bgColor}`,
		borderColor: ({ borderColor }) => `border-color:${borderColor}`,
		borderTopColor: ({ borderTopColor }) => `border-top-color:${borderTopColor}`,
		borderRightColor: ({ borderRightColor }) => `border-right-color:${borderRightColor}`,
		borderEndColor: ({ borderEndColor }) => `border-inline-end-color:${borderEndColor}`,
		borderBottomColor: ({ borderBottomColor }) => `border-bottom-color:${borderBottomColor}`,
		borderLeftColor: ({ borderLeftColor }) => `border-left-color:${borderLeftColor}`,
		borderStartColor: ({ borderStartColor }) => `border-inline-start-color:${borderStartColor}`
	},
	fonts: {
		fontFamily: ({ fontFamily }) => `font-family:${fontFamily}`,
		fontSize: ({ fontSize }) => `font-size:${fontSize}`,
		fontWeight: ({ fontWeight }) => `font-weight:${fontWeight}`,
		lineHeight: ({ lineHeight }) => `line-height:${lineHeight}`,
		letterSpacing: ({ letterSpacing }) => `letter-spacing:${letterSpacing}`
	},
	sizes: {
		w: ({ w }) => `width:${w}`,
		h: ({ h }) => `height:${h}`,
		minW: ({ minW }) => `min-width:${minW}`,
		maxW: ({ maxW }) => `max-width:${maxW}`,
		minH: ({ minH }) => `min-height:${minH}`,
		maxH: ({ maxH }) => `max-height:${maxH}`,
		boxSize: ({ w, h }) => `width:${w}; height:${h}`
	},
	space: {
		m: ({ m }) => `margin:${m}`,
		mt: ({ mt }) => `margin-top:${mt}`,
		mr: ({ mr }) => `margin-right:${mr}`,
		me: ({ me }) => `margin-inline-end:${me}`,
		mb: ({ mb }) => `margin-bottom:${mb}`,
		ml: ({ ml }) => `margin-left:${ml}`,
		ms: ({ ms }) => `margin-inline-start:${ms}`,
		mx: ({ mx }) => `margin-inline-start:${mx}; margin-inline-end:${mx}`,
		my: ({ my }) => `margin-top:${my}; margin-bottom:${my}`,
		p: ({ p }) => `padding:${p}`,
		pt: ({ pt }) => `padding-top:${pt}`,
		pr: ({ pr }) => `padding-right:${pr}`,
		pe: ({ pe }) => `padding-inline-end:${pe}`,
		pb: ({ pb }) => `padding-bottom:${pb}`,
		pl: ({ pl }) => `padding-left:${pl}`,
		ps: ({ ps }) => `padding-inline-start:${ps}`,
		px: ({ px }) => `padding-inline-start:${px}; padding-inline-end:${px}`,
		py: ({ py }) => `padding-top:${py}; padding-bottom:${py}`,
		gridGap: ({ gridGap }) => `grid-gap:${gridGap}`,
		gridRowGap: ({ gridRowGap }) => `grid-row-gap:${gridRowGap}`,
		gridColumnGap: ({ gridColumnGap }) => `grid-column-gap:${gridColumnGap}`,
		top: ({ top }) => `top:${top}`,
		right: ({ right }) => `right:${right}`,
		bottom: ({ bottom }) => `bottom:${bottom}`,
		left: ({ left }) => `left:${left}`
	},
	free: {
		opacity: ({ opacity }) => `opacity:${opacity}`,
		bgGradient: ({ bgGradient }) => `background-image:${bgGradient}`,
		bgClip: ({ bgClip }) => `background-clip:${bgClip}`,
		textAlign: ({ textAlign }) => `text-align:${textAlign}`,
		fontStyle: ({ fontStyle }) => `font-style:${fontStyle}`,
		textTransform: ({ textTransform }) => `text-transform:${textTransform}`,
		textDecoration: ({ textDecoration }) => `text-decoration:${textDecoration}`,
		verticalAlign: ({ verticalAlign }) => `vertical-align:${verticalAlign}`,
		overflow: ({ overflow }) => `overflow:${overflow}`,
		overflowX: ({ overflowX }) => `overflow-x:${overflowX}`,
		overflowY: ({ overflowY }) => `overflow-y:${overflowY}`,
		d: ({ d }) => `display:${d}`,
		alignItems: ({ alignItems }) => `align-items:${alignItems}`,
		alignContent: ({ alignContent }) => `align-content:${alignContent}`,
		justifyItems: ({ justifyItems }) => `justify-items:${justifyItems}`,
		justifyContent: ({ justifyContent }) => `justify-content:${justifyContent}`,
		flexWrap: ({ flexWrap }) => `flex-wrap:${flexWrap}`,
		flexDirection: ({ flexDirection }) => `flex-direction:${flexDirection}`,
		flex: ({ flex }) => `flex:${flex}`,
		flexGrow: ({ flexGrow }) => `flex-grow:${flexGrow}`,
		flexShrink: ({ flexShrink }) => `flex-shrink:${flexShrink}`,
		flexBasis: ({ flexBasis }) => `flex-basis:${flexBasis}`,
		justifySelf: ({ justifySelf }) => `justify-self:${justifySelf}`,
		alignSelf: ({ alignSelf }) => `align-self:${alignSelf}`,
		order: ({ order }) => `order:${order}`,
		gridColumn: ({ gridColumn }) => `grid-column:${gridColumn}`,
		gridColSpan: ({ gridColSpan }) => `grid-column: span ${gridColSpan} /  span ${gridColSpan}`,
		gridRowSpan: ({ gridRowSpan }) => `grid-row: span ${gridRowSpan} /  span ${gridRowSpan}`,
		gridRow: ({ gridRow }) => `grid-row:${gridRow}`,
		gridArea: ({ gridArea }) => `grid-area:${gridArea}`,
		gridAutoFlow: ({ gridAutoFlow }) => `grid-auto-flow:${gridAutoFlow}`,
		gridAutoRows: ({ gridAutoRows }) => `grid-auto-rows:${gridAutoRows}`,
		gridAutoColumns: ({ gridAutoColumns }) => `grid-auto-columns:${gridAutoColumns}`,
		gridTemplateRows: ({ gridTemplateRows }) => `grid-template-rows:${gridTemplateRows}`,
		gridTemplateColumns: ({ gridTemplateColumns }) =>
			`grid-template-columns:${gridTemplateColumns}`,
		gridTemplateAreas: ({ gridTemplateAreas }) => `grid-template-areas:${gridTemplateAreas}`,
		bg: ({ bg }) => `background:${bg}`,
		bgImage: ({ bgImage }) => `background-image:${bgImage}`,
		bgSize: ({ bgSize }) => `background-size:${bgSize}`,
		bgPosition: ({ bgPosition }) => `background-position:${bgPosition}`,
		bgRepeat: ({ bgRepeat }) => `background-repeat:${bgRepeat}`,
		bgAttachment: ({ bgAttachment }) => `background-attachment:${bgAttachment}`,
		pos: ({ pos }) => `position:${pos}`,
		filter: ({ filter }) => `filter:${filter}`,
		brightness: ({ brightness }) => `filter:brightness(${brightness})`,
		contrast: ({ contrast }) => `filter:${contrast}`,
		hueRotate: ({ hueRotate }) => `filter:${hueRotate}`,
		invert: ({ invert }) => `filter:${invert}`,
		saturate: ({ saturate }) => `filter:${saturate}`,
		backdropFilter: ({ backdropFilter }) => `backdrop-filter:${backdropFilter}`,
		backdropBrightness: ({ backdropBrightness }) => `backdrop-filter:${backdropBrightness}`,
		backdropContrast: ({ backdropContrast }) => `backdrop-filter:${backdropContrast}`,
		backdropHueRotate: ({ backdropHueRotate }) => `backdrop-filter:${backdropHueRotate}`,
		backdropInvert: ({ backdropInvert }) => `backdrop-filter:${backdropInvert}`,
		backdropSaturate: ({ backdropSaturate }) => `backdrop-filter:${backdropSaturate}`,
		cursor: ({ cursor }) => `cursor:${cursor}`
	},
	borders: {
		border: ({ border }) => `border:${border}`,
		borderTop: ({ borderTop }) => `border-top:${borderTop}`,
		borderRight: ({ borderRight }) => `border-right:${borderRight}`,
		borderEnd: ({ borderEnd }) => `border-inline-end:${borderEnd}`,
		borderBottom: ({ borderBottom }) => `border-bottom:${borderBottom}`,
		borderLeft: ({ borderLeft }) => `border-left:${borderLeft}`,
		borderStart: ({ borderStart }) => `border-inline-start:${borderStart}`
	},
	borderWidths: {
		borderStartWidth: ({ borderStartWidth }) => `border-inline-start-width:${borderStartWidth}`,
		borderLeftWidth: ({ borderLeftWidth }) => `border-left-width:${borderLeftWidth}`,
		borderTopWidth: ({ borderTopWidth }) => `border-top-width:${borderTopWidth}`,
		borderWidth: ({ borderWidth }) => `border-width:${borderWidth}`,
		borderRightWidth: ({ borderRightWidth }) => `border-right-width:${borderRightWidth}`,
		borderEndWidth: ({ borderEndWidth }) => `border-inline-end-width:${borderEndWidth}`,
		borderBottomWidth: ({ borderBottomWidth }) => `border-bottom-width:${borderBottomWidth}`,
		borderX: ({ borderX }) => `border-left${borderX}; border-right:${borderX}`,
		borderY: ({ borderY }) => `border-top${borderY}; border-bottom:${borderY}`
	},
	borderStyles: {
		borderStyle: ({ borderStyle }) => `border-style:${borderStyle}`,
		borderTopStyle: ({ borderTopStyle }) => `border-top-style:${borderTopStyle}`,
		borderRightStyle: ({ borderRightStyle }) => `border-right-style:${borderRightStyle}`,
		borderEndStyle: ({ borderEndStyle }) => `border-inline-end-style:${borderEndStyle}`,
		borderBottomStyle: ({ borderBottomStyle }) => `border-bottom-style:${borderBottomStyle}`,
		borderLeftStyle: ({ borderLeftStyle }) => `border-left-style:${borderLeftStyle}`,
		borderStartStyle: ({ borderStartStyle }) => `border-inline-start-style:${borderStartStyle}`
	},
	radii: {
		borderRadius: ({ borderRadius }) => `border-radius:${borderRadius}`,
		borderTopLeftRadius: ({ borderTopLeftRadius }) =>
			`border-top-left-radius:${borderTopLeftRadius}`,
		borderTopStartRadius: ({ borderTopStartRadius }) =>
			`border-top-left-radius:${borderTopStartRadius}; border-top-right-radius:${borderTopStartRadius};`,
		borderTopRightRadius: ({ borderTopRightRadius }) =>
			`border-top-right-radius:${borderTopRightRadius}`,
		borderTopEndRadius: ({ borderTopEndRadius }) =>
			`border-top-right-radius:${borderTopEndRadius}; border-top-left-radius:${borderTopEndRadius}`,
		borderBottomRightRadius: ({ borderBottomRightRadius }) =>
			`border-bottom-right-radius:${borderBottomRightRadius}`,
		borderBottomEndRadius: ({ borderBottomEndRadius }) =>
			`border-bottom-right-radius:${borderBottomEndRadius}; border-bottom-left-radius:${borderBottomEndRadius}`,
		borderBottomLeftRadius: ({ borderBottomLeftRadius }) =>
			`border-bottom-left-radius:${borderBottomLeftRadius}`,
		borderBottomStartRadius: ({ borderBottomStartRadius }) =>
			`border-bottom-left-radius:${borderBottomStartRadius}`,
		borderTopRadius: ({ borderTopRadius }) =>
			`border-top-left-radius:${borderTopRadius};border-top-right-radius:${borderTopRadius}`,
		borderRightRadius: ({ borderRightRadius }) =>
			`border-top-right-radius:${borderRightRadius}; border-bottom-right-radius:${borderRightRadius}`,
		borderEndRadius: ({ borderEndRadius }) =>
			`border-top-right-radius:${borderEndRadius}; border-bottom-right-radius:${borderEndRadius}`,
		borderBottomRadius: ({ borderBottomRadius }) =>
			`border-bottom-left-radius:${borderBottomRadius}; border-bottom-right-radius:${borderBottomRadius}`,
		borderLeftRadius: ({ borderLeftRadius }) =>
			`border-top-left-radius:${borderLeftRadius}; border-bottom-left-radius:${borderLeftRadius}`,
		borderStartRadius: ({ borderStartRadius }) =>
			`border-top-left-radius:${borderStartRadius}; border-bottom-left-radius:${borderStartRadius}`
	},
	shadows: {
		textShadow: ({ textShadow }) => `text-shadow:${textShadow}`,
		dropShadow: ({ dropShodow }) => `filter:${dropShodow}`,
		shadow: ({ shadow }) => `box-shadow:${shadow}`
	},
	blur: {
		blur: ({ blur }) => `filter:${blur}`,
		backdropBlur: ({ backdropBlur }) => `backdrop-filter:${backdropBlur}`
	}
};
