import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function UserSettingsActive({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color || 'black'}
        fillRule="evenodd"
        d="M4.053 1.428a4.875 4.875 0 116.895 6.895 4.875 4.875 0 01-6.895-6.895zm5.803 10.304a6.008 6.008 0 00-5.661.514A6.006 6.006 0 001.5 17.251.75.75 0 110 17.25a7.504 7.504 0 0110.444-6.898.75.75 0 01-.588 1.38zm8.668-1.032l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.338 1.338 0 011.275 2.218l-1.03 1.11a1.001 1.001 0 00-.001 1.362l1.031 1.112a1.337 1.337 0 01-.442 2.138 1.339 1.339 0 01-.833.08l-1.472-.341a.993.993 0 00-1.174.681l-.442 1.447a1.327 1.327 0 01-1.274.948 1.33 1.33 0 01-1.274-.948l-.442-1.453a.996.996 0 00-1.174-.682l-1.472.342a1.336 1.336 0 01-1.455-.639 1.34 1.34 0 01.18-1.58l1.031-1.11a1 1 0 000-1.362l-1.03-1.111a1.343 1.343 0 01-.181-1.58 1.34 1.34 0 011.455-.638l1.472.34a.994.994 0 001.174-.68l.442-1.453a1.33 1.33 0 012.548.006zm-2.865 4.209a2.25 2.25 0 113.182 3.18 2.25 2.25 0 01-3.182-3.18zm1.591.841a.747.747 0 00-.53.22.747.747 0 000 1.06.747.747 0 001.06 0 .747.747 0 000-1.06.747.747 0 00-.53-.22z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default UserSettingsActive;
