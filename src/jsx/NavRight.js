import React from 'react';

import Svg from './BaseSvg';

const NavRightIcon = ({
  size,
  color,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 18 18'
    width={size}
    height={size}
    fill={color}
  >
    <path d='M 0 0 H 18 V 18 H 0 z M5,4l9,5l-9,5l0,-10Z' />
  </Svg>
);

NavRightIcon.displayName = 'NavRightIcon';

NavRightIcon.defaultProps = {
  size: 18,
  color: 'currentcolor'
};

export default NavRightIcon;
