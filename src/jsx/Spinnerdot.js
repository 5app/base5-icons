import React from 'react';

import Svg from './BaseSvg';

const SpinnerdotIcon = ({
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
    <path d='M 14 12 A 2 2 0 0 1 14 16 A 2 2 0 0 1 14 12' />
  </Svg>
);

SpinnerdotIcon.displayName = 'SpinnerdotIcon';

SpinnerdotIcon.defaultProps = {
  size: 18,
  color: 'currentcolor'
};

export default Spinnerdot;