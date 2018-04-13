import React from 'react';

const Plus = props => (
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
		<path d="M9.963 9.962L10 14.007s.024 1-1 1-1-1-1-1l.052-4.045L4 10.007s-1-.015-1-1 1-1 1-1l4.052.045L8 4.007s.027-1 1-1 1 1 1 1l-.037 4.045L14 8.007s1 .001 1 1-1 1-1 1l-4.037-.045z" />
	</svg>
);

export default Plus;
