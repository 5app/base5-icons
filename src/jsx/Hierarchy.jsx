import React from 'react';

const Hierarchy = props => (
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
		<path fill="none" d="M0 0h18v18H0z" />
		<path d="M16.143 12c.002 0 .857.021.857 1 0 .98-.857 1-.857 1H5.857S5 13.986 5 13c0-.985.855-1 .857-1h10.286zM14.143 8c.002 0 .857.021.857 1s-.855 1-.857 1H3.857S3 9.986 3 9c0-.985.855-1 .857-1h10.286zM12.143 4c.002 0 .857.021.857 1s-.855 1-.857 1H1.857S1 5.986 1 5c0-.985.855-1 .857-1h10.286z" />
	</svg>
);

export default Hierarchy;
