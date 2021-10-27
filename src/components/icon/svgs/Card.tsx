import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Card({ width, height, color }: SvgProps) {
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
        d="M.75 5.612a2 2 0 012-2h18.5a2 2 0 012 2v11.895a2 2 0 01-2 2H2.75a2 2 0 01-2-2V5.612zm0 2.335h22.5m-18 4.335h8.25m-8.25 2.89h5.25"
      />
    </Svg>
  );
}

export default Card;
