import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function UserSettings({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <G
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        opacity={0.8}
      >
        <Path d="M.75 17.25a6.746 6.746 0 013.031-5.63 6.756 6.756 0 016.369-.578M3.375 4.875A4.128 4.128 0 007.5 9a4.128 4.128 0 004.125-4.125A4.128 4.128 0 007.5.75a4.128 4.128 0 00-4.125 4.125v0zM15.75 16.5c0 .398.158.78.44 1.06a1.494 1.494 0 002.12 0 1.494 1.494 0 000-2.12 1.494 1.494 0 00-2.12 0c-.282.28-.44.662-.44 1.06v0z" />
        <Path d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.338 1.338 0 011.275 2.218l-1.03 1.11a1.001 1.001 0 00-.001 1.362l1.031 1.112a1.337 1.337 0 01-.442 2.138 1.339 1.339 0 01-.833.08l-1.472-.341a.993.993 0 00-1.174.681l-.442 1.447a1.327 1.327 0 01-1.274.948 1.33 1.33 0 01-1.274-.948l-.442-1.453a.996.996 0 00-1.174-.682l-1.472.342a1.336 1.336 0 01-1.455-.639 1.34 1.34 0 01.18-1.58l1.031-1.11a1 1 0 000-1.362l-1.03-1.111a1.343 1.343 0 01-.181-1.58 1.34 1.34 0 011.455-.638l1.472.34a.994.994 0 001.174-.68l.442-1.453a1.33 1.33 0 012.548.006z" />
      </G>
    </Svg>
  );
}

export default UserSettings;
