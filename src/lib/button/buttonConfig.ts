import type { IStyleInterface } from '$lib/system/styleProps';

export const sizeVariant = {
	lg: {
		h: '12',
		minW: '12',
		fontSize: 'lg',
		px: '6'
	},
	md: {
		h: '10',
		minW: '10',
		fontSize: 'md',
		px: '4'
	},
	sm: {
		h: '8',
		minW: '8',
		fontSize: 'sm',
		px: '3'
	},
	xs: {
		h: '6',
		minW: '6',
		fontSize: 'xs',
		px: '2'
	}
};

export function buttonVariant(themeColor: string, variant: string) {
	return {
		ghost: {
			bg: 'none',
			border: 'none',
			color: themeColor === 'gray' ? `${themeColor}.700` : `${themeColor}.500`,
			_active: { bg: `${themeColor}.100`, brightness: '0.95' },
			_hover: {
				bg: `${themeColor}.100`
			}
		},
		outline: {
			color: themeColor === 'gray' ? `gray.600` : `${themeColor}.500`,
			border: '2px',
			borderStyle: 'solid',
			borderColor: `${themeColor}.200`,
			bg: 'none',
			_active: { bg: `${themeColor}.100`, brightness: '0.95' },
			_hover: {
				bg: `${themeColor}.100`
			}
		},
		solid: {
			bg: themeColor === 'gray' ? 'gray.200' : `${themeColor}.500`,
			color: themeColor === 'gray' ? 'black' : 'white',
			_hover: {
				opacity: '85%'
			},
			_active: {
				opacity: '110%'
			}
		},
		link: {
			p: '0',
			h: 'auto',
			border: 'none',
			lineHeight: 'normal',
			verticalAlign: 'baseline',
			color: themeColor === 'gray' ? `${themeColor}.700` : `${themeColor}.500`,
			bg: 'none',
			_hover: {
				textDecoration: 'underline'
			},
			_active: {
				color: `${themeColor}.700`
			}
		}
	}[variant];
}
