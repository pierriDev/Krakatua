import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Information({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 25 24"
    >
      <Path
        stroke={color || 'black'}
        strokeWidth={1.5}
        d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 7h.5"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 11h2v5m-2 0h4"
      />
    </Svg>
  );
}

export default Information;
