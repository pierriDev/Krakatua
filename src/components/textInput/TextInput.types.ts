import type { NameType } from '@/components/icon';
import { TextInputProps } from 'react-native';

export interface IconAndTextProps {
  type: 'info' | 'error',
  text: string,
  testID?: string
}

export interface InputBaseProps extends TextInputProps{
  label?: string;
  activeLabel?: string;
  hasError?: boolean;
  textButtonCaption?: string;
  onRightButtonPress?: () => void;
  iconButtonName?: NameType;
  iconButtonColor?: string;
  iconAndText?: IconAndTextProps;
  hintColor?: string;
}
