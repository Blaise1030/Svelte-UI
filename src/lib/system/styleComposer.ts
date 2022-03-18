import { SystemBreakpoints, generateBreakpoints } from './breakpoints';
import type { IStyleInterface } from './styleProps';
import { SystemColors } from './systemColors';
import { StyleInterface } from './styleProps';
import { css } from '@emotion/css';
import { SystemShadows } from './systemShadows';
import { SystemText } from './systemText';
import { SystemSpacing } from './systemSpacing';
import { SystemSizes } from './systemSizes';
import { SystemRadii } from './systemRadius';
import { v4 as uuidv4 } from 'uuid';

const pseudoClasses = {
	_active: '&:active',
	_hover: '&:hover',
	_focus: '&:focus',
	_enabled: '&:enable',
	_disabled: '&:disabled'
};

// ****** Core Engine ****** //
const genStyles = (sp: Partial<IStyleInterface>, defInterface = StyleInterface, base = true) => {
	const id = `css-${uuidv4()}`;
	const { unit, responsiveList } = generateBreakpoints(SystemBreakpoints);
	const stObj = _flattenStyleClasses(defInterface);
	let pseudoStyle = '';
	const baseStyle = Object.keys(sp).reduce((p, k) => {
		const styleFunc = stObj[k];
		if (!Array.isArray(sp[k]))
			if (!pseudoClasses[k]) return `${p} ${populateDefaults(k, sp[k], stObj)};`;
			else {
				const subClass = genStyles(sp[k], defInterface, false);
				pseudoStyle += `${pseudoClasses[k]} {${subClass}}`;
			}
		if (Array.isArray(sp[k]))
			sp[k].forEach((value: any, index: number) =>
				responsiveList[index]?.comp?.push(`${populateDefaults(k, value, stObj)};`)
			);
		return p;
	}, '');
	const respStyle = responsiveList.reduce(
		(p, { val, comp }, index) =>
			comp.length > 0
				? `${p} @media as screen and (${
						index === 0 ? 'max' : 'min'
				  }-width: ${val}${unit}) {.${id}{${comp.join(' ')}}}`
				: p,
		''
	);

	if (!base) return `${baseStyle} ${respStyle} ${pseudoStyle}`;
	return [id, `<style>.${id}{${baseStyle}} ${respStyle} ${pseudoStyle}</style>`];
};

const generateStylesClass = genStyles;
export default generateStylesClass;

// ****** Populate Default Styles ****** //
const themeColor = (k, value, styles) => {
	const styleFunc = styles['colors'][k];
	if (!styleFunc) return;
	if (SystemColors[value]) return styleFunc({ [k]: SystemColors[value] });
};

const themeShadow = (k, value, styles) => {
	const styleFunc = styles['shadows'][k];
	if (!styleFunc) return;
	if (SystemShadows[value]) return styleFunc({ [k]: SystemShadows[value] });
};

const themeText = (k, value, styles) => {
	const styleFunc = styles['fonts'][k];
	if (!styleFunc) return;
	if (SystemText[k][value]) return styleFunc({ [k]: SystemText[k][value] });
};

const themeSpacing = (k, value, styles) => {
	const styleFunc = styles['space'][k];
	if (!styleFunc) return;
	if (SystemSpacing[value]) return styleFunc({ [k]: SystemSpacing[value] });
};

const themeRadii = (k, value, styles) => {
	const styleFunc = styles['radii'][k];
	if (!styleFunc) return;
	if (SystemRadii[value]) return styleFunc({ [k]: SystemRadii[value] });
};

const themeSizes = (k, value, styles) => {
	const styleFunc = styles['sizes'][k];
	const Sizes = {
		...SystemSpacing,
		...SystemSizes
	};
	if (!styleFunc) return;
	if (Sizes[value]) return styleFunc({ [k]: Sizes[value] });
};

// ****** Populate Default Styles ****** //
const populateDefaults = (
	key,
	value,
	flattenedClass,
	styles = StyleInterface,
	pluginArrays = [themeSpacing, themeSizes, themeColor, themeShadow, themeText, themeRadii]
) => {
	let results;
	for (let i = 0; i < pluginArrays.length; i++) {
		const res = pluginArrays[i](key, value, styles);
		if (res) results = res;
	}
	if (!results && flattenedClass[key]) results = flattenedClass[key]({ [key]: value });
	return results;
};

// ****** Utilities ****** //
const _flattenStyleClasses = (stylesInterface = StyleInterface) =>
	Object.keys(stylesInterface).reduce((p, k) => ({ ...p, ...stylesInterface[k] }), {});
