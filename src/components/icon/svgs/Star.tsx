import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function Star({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill="none"
      viewBox="0 0 26 26"
    >
      <Path
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.743 1.956l3.42 6.776 6.582.652a.819.819 0 01.735 1 .818.818 0 01-.224.405l-5.417 5.37 2.009 7.297a.832.832 0 01-1.177.955l-6.674-3.305-6.664 3.301a.833.833 0 01-1.164-.485.827.827 0 01-.012-.47l2.008-7.297-5.421-5.37a.824.824 0 01.511-1.405l6.582-.652 3.415-6.772a.837.837 0 011.491 0v0z"
      />
    </Svg>
  );
}

export default Star;
