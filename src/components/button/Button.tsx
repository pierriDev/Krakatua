import {
  clear, dark_red, light_red, main_yellow,
} from '../../../native-base-theme/variables/colors';
import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { stylesBuilder } from '@/components/button/Button.styles';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  outlined?: boolean;
  disabled?: boolean;
  small?: boolean;
  testID?: string;
  mainContainerStyle?: object;
  smallFont?: boolean;
  redButton?: boolean
}

export const Button = ({
  onPress,
  title,
  outlined = false,
  disabled = false,
  small = false,
  testID,
  mainContainerStyle = {},
  smallFont = false,
  redButton,
}: ButtonProps) => {
  let highlightedColor = outlined ? clear : main_yellow;
  highlightedColor = redButton ? light_red : highlightedColor;

  const styles = stylesBuilder({ outlined, disabled, small });

  return (
    <TouchableHighlight
      style={[styles.button, redButton ? { backgroundColor: dark_red } : {}, mainContainerStyle]}
      onPress={onPress}
      underlayColor={highlightedColor}
      disabled={disabled}
      testID={testID}
    >

      <Text style={smallFont ? styles.smallLabel : styles.label}>
        { title }
      </Text>
    </TouchableHighlight>
  );
};
