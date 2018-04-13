import React from 'react';

const EyeOpen = props => (
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
		<path
			d="M9 5C3.751 5 1 8.866 1 9.48c0 .613 2.751 4.48 8 4.48 5.248 0 8-3.867 8-4.48C17 8.866 14.248 5 9 5zm0 7.926c-1.964 0-3.556-1.543-3.556-3.446 0-1.903 1.592-3.447 3.556-3.447s3.555 1.544 3.555 3.447S10.964 12.926 9 12.926zM9 9.48c-.326-.358.53-1.723 0-1.723-.982 0-1.778.772-1.778 1.723 0 .951.796 1.723 1.778 1.723s1.778-.772 1.778-1.723c0-.438-1.501.303-1.778 0z"
			fillRule="nonzero"
		/>
	</svg>
);

export default EyeOpen;
