import * as React from 'react';
import Svg, {
  ClipPath, Defs, G, Path, SvgProps,
} from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function HidePassword({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={color || 'black'}
      viewBox="0 0 24 24"
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          fill={color || 'black'}
          fillRule="evenodd"
          d="M22.074 2.48c.287.3.277.774-.021 1.061l-18.75 18a.75.75 0 01-1.04-1.082l18.75-18a.75.75 0 011.061.022zm-2.93 5.958a.751.751 0 011.049-.164c1.155.843 2.222 1.8 3.186 2.858l.003.003a2.413 2.413 0 010 3.23l-.003.002c-2.62 2.883-6.965 5.953-11.382 5.883a10.72 10.72 0 01-3.255-.483.75.75 0 11.445-1.432 9.247 9.247 0 002.808.415h.018c3.779.064 7.744-2.627 10.255-5.39a.917.917 0 000-1.22 19.893 19.893 0 00-2.96-2.654.75.75 0 01-.163-1.048zm-4.55-2.884a10.33 10.33 0 00-2.592-.304c-4.345-.067-8.7 2.936-11.378 5.88l-.002.003a2.41 2.41 0 000 3.23l.004.004a21.414 21.414 0 002.693 2.486.75.75 0 00.92-1.184 20.077 20.077 0 01-2.504-2.312.911.911 0 01.001-1.219C4.298 9.32 8.275 6.688 11.988 6.75h.02a8.814 8.814 0 012.224.26.751.751 0 00.362-1.456zM12 9.75a2.995 2.995 0 00-2.771 1.852A2.996 2.996 0 009 12.75a.75.75 0 11-1.5 0 4.496 4.496 0 014.501-4.5.75.75 0 010 1.5zm4.5 2.999a.75.75 0 00-1.5 0 3.004 3.004 0 01-.878 2.122A2.994 2.994 0 0112 15.75a.75.75 0 000 1.5 4.496 4.496 0 004.5-4.501z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HidePassword;
