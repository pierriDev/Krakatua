import { capitalize } from '../../utils/strUtils';
import * as React from 'react';
import { getIcon } from './icons';
import type { IconProps } from './types';

const Icon = ({
  name, width, height, color,
}: IconProps) => {
  if (!name) {
    return null;
  }
  const MyIcon = getIcon(capitalize(name));
  return <MyIcon width={width} height={height} color={color} />;
};

export default Icon;
