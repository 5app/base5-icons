import React from 'react';

import Svg from './BaseSvg';

const AssetIcon = ({
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
    <path d='M14,6.596c0,-2.538 -2.058,-4.596 -4.596,-4.596c-1.666,0 -3.391,0 -4.432,0c-0.537,0 -0.972,0.435 -0.972,0.972c0,2.565 0,9.491 0,12.056c0,0.537 0.435,0.972 0.972,0.972c1.913,0 6.143,0 8.056,0c0.537,0 0.972,-0.435 0.972,-0.972c0,-1.724 0,-5.416 0,-8.432ZM13,7c0,-2.209 -1.791,-4 -4,-4c0,0 0,0 0,0l0,4l4,0c0,0 0,0 0,0Z' />
  </Svg>
);

AssetIcon.displayName = 'AssetIcon';

AssetIcon.defaultProps = {
  size: 18,
  color: 'currentcolor'
};

export default AssetIcon;
