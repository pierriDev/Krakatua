import * as React from 'react';
import Svg, {
  ClipPath, Defs, G, Path, SvgProps,
} from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function ShowPassword({ width, height, color }: SvgProps) {
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
      >
        <Path d="M12 5.251C7.97 5.183 3.8 8 1.18 10.885a1.659 1.659 0 00-.001 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637a1.665 1.665 0 000-2.226C20.2 8 16.031 5.183 12 5.251z" />
        <Path d="M15.75 12a3.74 3.74 0 01-.633 2.083 3.736 3.736 0 01-1.683 1.38 3.745 3.745 0 01-5.112-2.733 3.748 3.748 0 017.143-2.165c.188.455.285.942.285 1.435z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShowPassword;
