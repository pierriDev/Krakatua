import * as React from 'react';
import Svg, {
  ClipPath, Defs, G, Path, SvgProps,
} from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Pay({ width, height, color }: SvgProps) {
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
        clipPath="url(#prefix__clip0)"
        opacity={0.8}
      >
        <Path d="M4.75 7.113c.074 0 .147.02.208.058a.35.35 0 01.138.155.32.32 0 01-.081.377.396.396 0 01-.577-.052.33.33 0 01-.063-.193c0-.091.04-.18.11-.244a.39.39 0 01.265-.101zm15 6.917c.074 0 .147.02.208.057.062.038.11.092.139.155a.332.332 0 01-.082.377.397.397 0 01-.577-.052.329.329 0 01-.063-.192c0-.092.04-.18.11-.245s.166-.1.265-.1z" />
        <Path d="M1 4h22.5v13.833H1V4z" />
        <Path d="M9.25 10.917c0 .733.316 1.437.879 1.956.562.519 1.325.81 2.121.81s1.559-.291 2.121-.81a2.662 2.662 0 00.879-1.956c0-.734-.316-1.438-.879-1.957-.562-.519-1.325-.81-2.121-.81s-1.559.291-2.121.81a2.664 2.664 0 00-.879 1.957z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Pay;
