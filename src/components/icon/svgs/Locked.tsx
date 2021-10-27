import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Locked({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color || '#42967D'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.516 9.89h15.47v12.657H3.516V9.89zM6.329 9.89V6.375a4.921 4.921 0 0 1 9.844 0V9.89M11.25 14.813v2.812"
      />
    </Svg>
  );
}

export default Locked;
