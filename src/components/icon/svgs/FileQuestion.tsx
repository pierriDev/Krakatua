import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function FileQuestion({ width, height, color }: SvgProps) {
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
        d="M11.25 17.25c0 1.591.632 3.117 1.757 4.243a6.003 6.003 0 008.486 0 6.003 6.003 0 000-8.486 6.003 6.003 0 00-8.486 0 6.003 6.003 0 00-1.757 4.243z"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.375 16.125a1.88 1.88 0 011.157-1.732 1.871 1.871 0 012.044.406 1.88 1.88 0 01-.284 2.885A1.877 1.877 0 0117.25 18m0 2.25a.374.374 0 01.073.743.38.38 0 01-.385-.16.374.374 0 01.312-.583zM3.75 6.75h10.5m-10.5 4.5h6m-6 4.5H7.5m0 4.5H2.25c-.398 0-.78-.158-1.06-.44a1.494 1.494 0 01-.44-1.06V2.25c0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44h10.629c.398 0 .779.158 1.06.439l2.872 2.872c.281.281.439.662.439 1.06V7.5"
      />
    </Svg>
  );
}

export default FileQuestion;
