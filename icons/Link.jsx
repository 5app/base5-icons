import React from "react";

const Link = props => (
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
		<path d="M7.395 12.513l-.608.603c-.526.52-1.383.52-1.909 0a1.321 1.321 0 0 1 0-1.877l2.235-2.215c.462-.459 1.334-1.135 1.969-.506a.744.744 0 0 0 1.049-1.054c-1.08-1.071-2.676-.873-4.065.506l-2.235 2.215A2.789 2.789 0 0 0 3 12.177c0 .755.296 1.461.831 1.992a2.837 2.837 0 0 0 2.002.822c.725 0 1.45-.274 2.001-.822l.609-.603a.74.74 0 0 0 .003-1.049.744.744 0 0 0-1.051-.004zm6.774-8.608c-1.161-1.149-2.783-1.212-3.855-.147l-.757.751a.741.741 0 0 0-.004 1.05.745.745 0 0 0 1.052.004l.756-.751c.556-.551 1.284-.323 1.76.148a1.317 1.317 0 0 1 0 1.876L10.737 9.2c-1.092 1.08-1.602.574-1.821.357a.744.744 0 0 0-1.047 1.054c.501.496 1.073.742 1.671.742.733 0 1.508-.369 2.245-1.1l2.384-2.363A2.794 2.794 0 0 0 15 5.898c0-.753-.297-1.461-.831-1.993z" />
	</svg>
);

export default Link;
