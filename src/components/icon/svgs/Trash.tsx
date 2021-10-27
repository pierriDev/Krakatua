import * as React from 'react';
import Svg, {
  SvgProps, G, Path, Defs, ClipPath,
} from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function SvgComponent({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
    >
      <G clipPath="url(#prefix__a)">
        <G
          clipPath="url(#prefix__b)"
          stroke={color || 'black'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M1.094 5.484h22m-8.75-4h-4.5a1.5 1.5 0 00-1.5 1.5v2.5h7.5v-2.5a1.5 1.5 0 00-1.5-1.5zm-4.5 16.75v-7.5m4.5 7.5v-7.5" />
          <Path d="M18.954 22.104a1.49 1.49 0 01-1.49 1.38H6.724a1.49 1.49 0 01-1.49-1.38l-1.39-16.62h16.5l-1.39 16.62z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path
            fill="#fff"
            transform="translate(.094 .484)"
            d="M0 0h24v24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
