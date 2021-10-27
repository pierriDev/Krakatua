import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function SvgComponent({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
    >
      <Path
        d="M1.703 6.137a2 2 0 012-2H20.8a2 2 0 012 2v10.9a2 2 0 01-2 2H3.703a2 2 0 01-2-2v-10.9zm0 2.063H22.8M5.922 12.266h7.735m-7.735 2.707h4.923"
        stroke={color || 'black'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
