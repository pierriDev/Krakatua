import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function InformationActive({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color || 'black'}
        stroke={color || 'black'}
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 7h.5"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 11h2v5m-2 0h4"
      />
    </Svg>
  );
}

export default InformationActive;
