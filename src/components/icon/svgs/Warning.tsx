import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Warning({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.75a.374.374 0 00-.073.743.38.38 0 00.385-.16.374.374 0 00-.312-.583z"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 15.75v-7.5"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.621 1.76a1.81 1.81 0 00-2.576-.737 1.815 1.815 0 00-.666.737L.906 21.058a1.522 1.522 0 001.366 2.192h19.456c.258 0 .513-.066.739-.19a1.527 1.527 0 00.627-2.002L13.621 1.76z"
      />
    </Svg>
  );
}

export default Warning;
