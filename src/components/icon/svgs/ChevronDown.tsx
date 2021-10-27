import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function ChevronDown({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
    >
      <Path
        d="M20.502 8.22l-7.623 7.623a.535.535 0 01-.754 0L4.502 8.221"
        stroke={color || 'white'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronDown;
