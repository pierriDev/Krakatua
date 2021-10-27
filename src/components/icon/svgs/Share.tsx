import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Share({ width, height, color }: SvgProps) {
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
        d="M17.25 8.25h1.5c.398 0 .78.158 1.06.44.282.28.44.662.44 1.06v12c0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44H5.25c-.398 0-.78-.158-1.06-.44a1.494 1.494 0 01-.44-1.06v-12c0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44h1.5M12 .75v10.5m0-10.5L8.25 4.5M12 .75l3.75 3.75"
      />
    </Svg>
  );
}

export default Share;
