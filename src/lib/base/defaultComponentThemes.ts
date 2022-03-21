const ComponentThemes = (colorMode: (l: string, d: string) => string, extensions: Object = {}) => ({
	button: {
		variant: ({ colorScheme }) => ({
			ghost: {
				bg: 'none',
				border: 'none',
				color: colorScheme === 'gray' ? `${colorScheme}.700` : `${colorScheme}.500`,
				_active: { bg: `${colorScheme}.100`, brightness: '0.95' },
				_hover: {
					bg: `${colorScheme}.100`
				}
			},
			outline: {
				color: colorScheme === 'gray' ? `gray.600` : `${colorScheme}.500`,
				border: '2px',
				borderStyle: 'solid',
				borderColor: `${colorScheme}.200`,
				bg: 'none',
				_active: { bg: `${colorScheme}.100`, brightness: '0.95' },
				_hover: {
					bg: `${colorScheme}.100`
				}
			},
			solid: {
				color: colorScheme === 'gray' ? colorMode('black', 'white') : 'white',
				bgOpacity: colorMode('100%', '50%'),
				bg:
					colorScheme === 'gray'
						? colorMode('gray.200', 'rgba(255, 255, 255, 0.2)')
						: colorMode(`${colorScheme}.500`, `${colorScheme}.400`),
				_hover: {
					opacity: '85%'
				},
				_active: {
					opacity: '110%'
				}
			},
			link: {
				color: colorScheme === 'gray' ? `${colorScheme}.700` : `${colorScheme}.500`,
				verticalAlign: 'baseline',
				lineHeight: 'normal',
				border: 'none',
				bg: 'none',
				h: 'auto',
				p: '0',
				_hover: {
					textDecoration: 'underline'
				},
				_active: {
					color: `${colorScheme}.700`
				}
			}
		}),
		size: {
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
		}
	},
	...extensions
});

export default ComponentThemes;
