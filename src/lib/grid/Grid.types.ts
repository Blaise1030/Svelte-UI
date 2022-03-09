import type { IStyleInterface } from '$lib/system/styleProps';
import type { SystemStyleProps } from '$lib/system/System.types';

export type GridItemPropsOmit = Omit<IStyleInterface, 'gridColumn' | 'gridRow'>;
export type GridItemProps = {
	colSpan: SystemStyleProps;
	rowSpan: SystemStyleProps;
};
