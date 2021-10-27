import { iconNames } from './icons';

const nameTypeBase = [...iconNames] as const;
export type NameType = typeof nameTypeBase[number];

export interface IconProps {
  name: NameType;
  width?: number;
  height?: number;
  color?: string;
}
