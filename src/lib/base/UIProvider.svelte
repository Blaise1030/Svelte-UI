<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { css } from '@emotion/css';
	import {
		type IStyleInterface,
		systemPseudoClass,
		systemBreakpoints,
		styleInterface
	} from './styleProps';
	import { themeStyles } from './themeStyles';
	import ComponentThemes from './defaultComponentThemes';

	onMount(() => ($common.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches));
	const useColorMode = (light: string, dark: string) => ($common.isDarkMode ? dark : light);
	const toggleTheme = () => ($common.isDarkMode = !$common.isDarkMode);

	const styleMap = (() => {
		const obj = styleInterface('any');
		const keys = Object.keys(obj);
		const res = {};
		for (let i = 0; i < keys.length; i++) {
			const subkeys = Object.keys(obj[keys[i]]);
			for (let j = 0; j < subkeys.length; j++) res[subkeys[j]] = keys[i];
		}
		return res;
	})();

	const genComponentTheme = (componentProps: Object, componentType: string) => {
		const component = ComponentThemes(useColorMode)[componentType];
		const keys = Object.keys(componentProps);
		let res = {};
		for (let i = 0; i < keys.length; i++) {
			const currentKey = keys[i].toString();
			const item = component[currentKey];
			if (item) {
				if (!(typeof item === 'function')) res = { ...res, ...item[componentProps[currentKey]] };
				else res = { ...res, ...item({ ...componentProps })[componentProps[currentKey]] };
			}
		}
		return res;
	};

	const genStyle = (sp: Partial<IStyleInterface>, isBase: boolean = true) => {
		const { unit, breakpoints } = systemBreakpoints({});
		const responsiveBuckets = breakpoints.map(() => []);
		const pseudoClass = systemPseudoClass({});
		let baseStyles = '';
		let resp = '';
		let pseudoC = '';

		const keys = Object.keys(sp);
		for (let i = 0; i < keys.length; i++) {
			const cKey = keys[i];
			const cItem = sp[cKey];
			const keyMap = styleMap[cKey];
			if (!keyMap && !pseudoClass[cKey]) continue;
			else if (!Array.isArray(cItem) && pseudoClass[cKey]) {
				pseudoC = pseudoC.concat(`${pseudoClass[cKey]}{${genStyle(cItem, false)}}`);
			} else if (!Array.isArray(cItem) && !pseudoClass[cKey]) {
				let value = cItem;
				if (themeStyles[keyMap] && themeStyles[keyMap][cItem]) value = themeStyles[keyMap][cItem];
				const item = styleInterface(value)[keyMap][cKey];
				baseStyles = baseStyles.concat(`${item}; `);
			} else {
				for (let j = 0; j < cItem.length; j++) {
					if (j < breakpoints.length) {
						let value = cItem[j];
						if (themeStyles[keyMap] && themeStyles[keyMap][cItem[j]])
							value = themeStyles[keyMap][cItem[j]];
						const val = styleInterface(value)[keyMap][cKey];
						responsiveBuckets[j].push(val);
					}
				}
			}
		}

		for (let i = 0; i < responsiveBuckets.length; i++) {
			const media = i === 0 ? 'max' : 'min';
			if (responsiveBuckets[i].length > 0) {
				const responsive = responsiveBuckets[i].join(' ');
				resp = resp.concat(`@media (${media}-width: ${breakpoints[i]}${unit}) {${responsive}}`);
			}
		}

		const merged = `${baseStyles} ${resp} ${pseudoC}`;
		return !isBase
			? merged
			: css`
					${merged}
			  `;
	};

	let common = writable({
		isDarkMode: false,
		genComponentTheme,
		useColorMode,
		toggleTheme,
		genStyle
	});

	setContext('common', common);
</script>

<slot />
