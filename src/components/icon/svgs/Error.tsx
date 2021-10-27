import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Error({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 16 16"
    >
      <Circle cx={8} cy={8} r={7.5} fill={color || 'black'} stroke={color || 'black'} />
      <Path
        fill="#fff"
        d="M9.176 4H7.034l.196 5.473h1.75L9.176 4zm-1.069 8c.584 0 1.099-.447 1.108-1.001-.009-.547-.524-.99-1.108-.99-.613 0-1.115.443-1.107.99-.008.554.494 1.001 1.107 1.001z"
      />
    </Svg>
  );
}

export default Error;
