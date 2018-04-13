import React from 'react';

const Home = props => (
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
		<path d="M12 5V3.494c0-.274.223-.498.499-.498h1.002c.276 0 .499.224.499.498V7l2 2s.033.999-1 1h-1v4c0 .368-.333.999-1 1h-2.006a.995.995 0 0 1-.994-.994v-2.017A.986.986 0 0 0 9.011 11h-.016a.996.996 0 0 0-.995.995v2.022c0 .543-.44.983-.983.983H5c-.666 0-1-.632-1-1v-4h-.922C1.99 9.934 2 9 2 9l7-7 3 3z" />
	</svg>
);

export default Home;
