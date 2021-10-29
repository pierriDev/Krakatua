import type { NameType as iconNameType } from '@/components/icon';
import { ViewStyle } from 'react-native';

export interface ListCellItemProps {
  title?: string;
  contentRootStyle?: object;
  primaryText?: string;
  primaryTextColor?: string,
  primaryTextStyle?: object,
  primaryTextComponent?: any,
  secondaryText?: string;
  secondaryTextStyle?: object,
  hasBorder?: boolean;
  hasLeftIcon?: boolean;
  leftIconType?: 'star' | 'premier' | iconNameType;
  variant?: 'financial' | 'financial2';
  rightContainerType?: 'icon' | 'text';
  rightContainerPrimaryText?: string;
  rightContainerPrimaryTextStyle?: object;
  rightContainerSecondaryText?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  customRightIcon?: JSX.Element;
  rightIconTestId?: string;
  isElevated?: boolean;
  onBodyPress?: () => void;
  onRightIconPress?: () => void;
  testID?: string;
  onlyRightIconClickable?: boolean;
  financialIconContainerStyle?: ViewStyle;
}
