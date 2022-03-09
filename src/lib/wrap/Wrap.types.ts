import type { SystemStyleProps } from '$lib/system/System.types';

type WrapProps = Partial<{
	align: SystemStyleProps;
	justify: SystemStyleProps;
	spacing: SystemStyleProps;
	direction: SystemStyleProps;
}>;

export default WrapProps;
