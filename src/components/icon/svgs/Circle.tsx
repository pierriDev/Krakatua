import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Circle({ width, height, color }: SvgProps) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="circle"
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      viewBox="0 0 512 512"
    >
      <Path
        fill={color || 'black'}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      />
    </Svg>
  );
}

export default Circle;
