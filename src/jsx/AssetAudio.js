import React from 'react';

import Svg from './BaseSvg';

const AssetAudioIcon = ({
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
    <path d='M 0 0 H 18 V 18 H 0 z M6.016,12.205l0,-7.205l7,-1l0,8.499l0,0l0,0.001l-0.001,0.004l-0.001,0.046l0,0.01c-0.042,0.8 -0.928,1.44 -2.014,1.44c-1.112,0 -2.016,-0.672 -2.016,-1.5c0,-0.828 0.904,-1.5 2.016,-1.5c0.37,0 0.717,0.074 1.016,0.205l0,-4.062l-5,0.714l0,5.687c0,0.2 -0.059,0.386 -0.16,0.542c-0.307,0.537 -1.023,0.914 -1.856,0.914c-1.112,0 -2.016,-0.672 -2.016,-1.5c0,-0.828 0.904,-1.5 2.016,-1.5c0.37,0 0.717,0.074 1.016,0.205Z' />
  </Svg>
);

AssetAudioIcon.displayName = 'AssetAudioIcon';

AssetAudioIcon.defaultProps = {
  size: 18,
  color: 'currentcolor'
};

export default AssetAudio;
