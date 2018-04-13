import React from 'react';

const Star = props => (
	<svg
		viewBox="0 0 18 18"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={1.414}
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M8.539 3.32a.476.476 0 0 1 .901 0l1.281 3.743 3.994.048a.476.476 0 0 1 .446.325.467.467 0 0 1-.168.523l-3.202 2.362 1.188 3.773a.47.47 0 0 1-.175.521.48.48 0 0 1-.554.003l-3.26-2.283-3.26 2.283a.481.481 0 0 1-.555-.003.468.468 0 0 1-.174-.521l1.187-3.773-3.202-2.362a.467.467 0 0 1-.168-.523.476.476 0 0 1 .446-.325l3.994-.048L8.539 3.32z" />
	</svg>
);

export default Star;
