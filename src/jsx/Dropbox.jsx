import React from 'react';

const Dropbox = props => (
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
		<path d="M6.163 2.65L2 5.238l2.852 2.387L9 4.937 6.163 2.65zm5.354 10.984a.323.323 0 0 1-.208-.074L9 11.647l-2.309 1.914a.331.331 0 0 1-.386.022l-1.711-1.117v.659L9 15.895l4.405-2.771v-.658l-1.71 1.116a.327.327 0 0 1-.178.052zM16 5.238L11.837 2.65 9 4.937l4.148 2.688L16 5.238zm-7 4.974l2.573 2.132 4.113-2.685-2.538-2.034L9 10.212zm-2.573 2.132L9 10.212 4.852 7.625 2.314 9.659l4.113 2.685z" />
	</svg>
);

export default Dropbox;
