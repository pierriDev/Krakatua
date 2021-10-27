import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function HomeActive({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color || 'black'}
        d="M3.955 8.921L.969 11.91a.75.75 0 001.062 1.06l1.719-1.72v10.19c0 .415.336.75.75.75H9a.75.75 0 00.75-.75v-4.5c0-.596.237-1.169.659-1.59a2.246 2.246 0 013.182 0c.422.421.659.994.659 1.59v4.5c0 .414.336.75.75.75 1.498-.02 3.001 0 4.5 0a.75.75 0 00.75-.75V11.251l1.72 1.719a.75.75 0 001.06-1.061L20.04 8.92l-.02-.02-6.43-6.426-.002-.001a2.242 2.242 0 00-2.45-.495 2.25 2.25 0 00-.732.485l-.002.002-6.42 6.425-.03.03z"
      />
    </Svg>
  );
}

export default HomeActive;
