import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getSpacing} from 'base5-ui/utils/spacing';
import {pxToRem, pxToEm} from 'base5-ui/utils/units';

const iconSize = 18;

const sizeMap = {
	unscaled: pxToRem(iconSize),
	default: pxToEm(iconSize),
	medium: pxToEm(iconSize * 1.5),
	big: pxToEm(iconSize * 3),
	huge: pxToEm(iconSize * 6),
};

const Svg = styled.span.attrs({
	role: 'presentation',
})`
	display: inline-block;
	vertical-align: middle;

	flex: 0 0 auto;
	/* Using ems makes the icon scale along with the surrounding font size */
	width: 1em;
	height: 1em;

	${p => p.spacingLeft && css`
		margin-left: ${getSpacing(p.spacingLeft)};
	`}
	${p => p.spacingRight && css`
		margin-right: ${getSpacing(p.spacingRight)};
	`}

	fill: currentColor;
	font-size: ${p => sizeMap[p.size || 'default']};

	${p => p.vAlign && css`
		/* Use to align icons with surrounding body text */
		position: relative;
		top: -0.12em;
	`}
`;

Svg.propTypes = {
	size: PropTypes.string,
	vAlign: PropTypes.bool,
	spacingLeft: PropTypes.string,
	spacingRight: PropTypes.string,
};

export default Svg;
