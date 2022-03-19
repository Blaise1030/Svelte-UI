import type { IStyleInterface, SystemStyleProps } from '$lib/base/styleProps';

export type GridItemPropsOmit = Omit<IStyleInterface, 'gridColumn' | 'gridRow'>;
export type GridItemProps = {
	colSpan: SystemStyleProps;
	rowSpan: SystemStyleProps;
};
