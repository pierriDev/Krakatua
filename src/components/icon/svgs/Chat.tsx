import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Chat({ width, height, color }: SvgProps) {
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
        d="M20.392 18.328h-9.844l-5.626 4.218v-4.218H2.11a1.407 1.407 0 0 1-1.407-1.406V2.859A1.406 1.406 0 0 1 2.11 1.453h18.282A1.407 1.407 0 0 1 21.8 2.86v14.063a1.406 1.406 0 0 1-1.407 1.406z"
      />
      <Path
        stroke={color || '#42967D'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.032 9.54a.352.352 0 1 0 0 .702.352.352 0 0 0 0-.703zM11.25 9.54a.352.352 0 1 0 0 .702.352.352 0 0 0 0-.703zM15.47 9.54a.352.352 0 1 0 0 .702.352.352 0 0 0 0-.703z"
      />
    </Svg>
  );
}

export default Chat;
