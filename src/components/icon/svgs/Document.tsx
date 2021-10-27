import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Document({ width, height, color }: SvgProps) {
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
        d="M21.095 21.14a1.406 1.406 0 0 1-1.406 1.406H2.813a1.406 1.406 0 0 1-1.407-1.406V2.86a1.406 1.406 0 0 1 1.407-1.407h14.105c.367 0 .72.143.983.4l2.77 2.702a1.407 1.407 0 0 1 .424 1.007V21.14zM5.668 8.484h11.25M5.668 12.703h11.25M5.668 16.922h5.625"
      />
    </Svg>
  );
}

export default Document;
