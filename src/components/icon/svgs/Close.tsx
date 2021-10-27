import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Close({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.53 2.53a.75.75 0 00-1.06-1.06L12 10.94 2.53 1.47a.75.75 0 00-1.06 1.06L10.94 12l-9.47 9.47a.75.75 0 101.06 1.06L12 13.06l9.47 9.47a.75.75 0 101.06-1.06L13.06 12l9.47-9.47z"
        fill={color || 'black'}
      />
    </Svg>
  );
}

export default Close;
