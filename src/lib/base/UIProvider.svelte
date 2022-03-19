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
			if (!keyMap) continue;
			else if (!Array.isArray(cItem) && pseudoClass[cKey])
				pseudoC = pseudoC.concat(`${pseudoClass[cKey]}{${genStyle(cItem, false)}}`);
			else if (!Array.isArray(cItem) && !pseudoClass[cKey]) {
				const item = styleInterface(cItem)[keyMap][cKey];
				baseStyles = baseStyles.concat(`${item}; `);
			} else {
				for (let j = 0; j < cItem.length; j++) {
					if (j < breakpoints.length) {
						const value = styleInterface(cItem[j])[keyMap][cKey];
						responsiveBuckets[j].push(value);
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
		useColorMode,
		toggleTheme,
		genStyle
	});

	setContext('common', common);
</script>

<slot />
