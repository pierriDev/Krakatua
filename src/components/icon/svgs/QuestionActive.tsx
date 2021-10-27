import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../constants';

function QuestionActive({ width, height, color }: SvgProps) {
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
        d="M3.515 3.515a12 12 0 1116.971 16.97A12 12 0 013.515 3.515zm8.64 3.24a2.26 2.26 0 00-2.077 1.076 2.253 2.253 0 00-.328 1.17A.75.75 0 018.25 9a3.752 3.752 0 017.191-1.49c.273.631.368 1.325.273 2.006a3.742 3.742 0 01-.809 1.855 3.742 3.742 0 01-1.655 1.165.76.76 0 00-.363.274.754.754 0 00-.137.433v1.007a.75.75 0 01-1.5 0v-1.006c0-.465.144-.92.412-1.3.27-.38.65-.667 1.088-.822a2.259 2.259 0 001.479-1.812 2.25 2.25 0 00-2.074-2.554zm-.78 9.935a1.121 1.121 0 011.421.14 1.126 1.126 0 01-.366 1.834 1.12 1.12 0 01-1.225-.244 1.122 1.122 0 01.17-1.73z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default QuestionActive;
