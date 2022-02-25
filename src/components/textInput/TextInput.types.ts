import type { NameType } from '@/components/icon';
import { ViewStyle } from 'react-native';
import { TextInputMaskProps } from 'react-native-text-input-mask';

export interface IconAndTextProps {
  type: 'info' | 'error',
  text: string,
  testID?: string,
  containerStyle?: ViewStyle,
}

export interface TextInputProps extends TextInputMaskProps {
  label?: string;
  activeLabel?: string;
  hasError?: boolean;
  textButtonCaption?: string;
  onRightButtonPress?: () => void;
  iconButtonName?: NameType;
  iconButtonColor?: string;
  iconAndText?: IconAndTextProps;
  hintColor?: string;
  isEditable?: boolean;
  containerStyle?: ViewStyle;
  disableAnimation?: boolean;
}
