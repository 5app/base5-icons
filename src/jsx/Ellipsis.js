import React from 'react';

import Svg from './BaseSvg';

const EllipsisIcon = ({
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
    <path d='M15,11c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2Z M9,11c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2Z M3,11c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2Z' />
  </Svg>
);

EllipsisIcon.displayName = 'EllipsisIcon';

EllipsisIcon.defaultProps = {
  size: 18,
  color: 'currentcolor'
};

export default EllipsisIcon;
