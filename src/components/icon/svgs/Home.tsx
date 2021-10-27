import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Home({ width, height, color }: SvgProps) {
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
        d="M1.5 12.44l9.435-9.444a1.508 1.508 0 011.062-.436 1.486 1.486 0 011.06.443L22.5 12.44"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 9.441V21.44h-4.458M4.5 9.436V21.44h4.042m6.458 0v-4.5a2.999 2.999 0 00-5.121-2.122A2.998 2.998 0 009 16.939v4.5"
      />
    </Svg>
  );
}

export default Home;
