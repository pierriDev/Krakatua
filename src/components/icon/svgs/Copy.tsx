import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Copy({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color || 'black'}
        d="M19.667 4.667H7a.997.997 0 00-1 1v16a.997.997 0 001 1h12.667a.997.997 0 001-1v-16a1.002 1.002 0 00-1-1zm-.334 16.667h-12V6h12v15.334z"
      />
      <Path
        fill={color || 'black'}
        d="M17.334 2.333a1.002 1.002 0 00-1-1H3.667a.997.997 0 00-1 1v16a.997.997 0 001 1H4V2.666h13.334v-.333z"
      />
    </Svg>
  );
}

export default Copy;
