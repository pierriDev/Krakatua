import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH} from '../constants';

function ChevronLeft({width, height, color}: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4l7.622 7.623a.517.517 0 01.156.377.526.526 0 01-.156.377L8 20"
      />
    </Svg>
  );
}

export default ChevronLeft;
