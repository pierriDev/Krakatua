import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function WarningRound({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 25 24"
    >
      <Circle cx={12.5} cy={16.06} r={0.75} fill="#C93A3A" />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 15.75a.318.318 0 00-.289.193.314.314 0 00.548.293.31.31 0 00-.038-.394.312.312 0 00-.221-.092z"
      />
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.5 13.25V6.375"
      />
      <Path
        stroke={color || 'black'}
        strokeWidth={1.5}
        d="M3.125 12a9.375 9.375 0 1018.748-.002 9.375 9.375 0 00-18.748.003v0z"
      />
    </Svg>
  );
}

export default WarningRound;
