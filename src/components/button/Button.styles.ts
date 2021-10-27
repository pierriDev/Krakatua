import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { StylesType } from '../../components/button/Button.types';
import { black, main_yellow, white } from '../../../native-base-theme/variables/colors';
import Fonts from '../../../native-base-theme/variables/fonts';

export const stylesBuilder = ({ outlined, disabled, small }: StylesType) => {
  const buttonHeight = small ? 32 : 48;
  const borderRadius = buttonHeight * 0.5;
  const baseStyles: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: main_yellow,
    height: buttonHeight,
    borderRadius,
    borderWidth: 0,
    borderColor: main_yellow,
  };

  const smallText: TextStyle = {
    ...Fonts.buttonMedium,
    color: white,
  };

  const baseText: TextStyle = {
    ...Fonts.body_medium,
    color: white,
  };

  if (outlined) {
    baseStyles.borderWidth = 1;
    baseStyles.backgroundColor = white;
    baseText.color = black;
    smallText.color = black;
  }
  if (disabled) {
    baseStyles.backgroundColor = main_yellow;
    baseText.color = white;
    smallText.color = white;
  }
  if (outlined && disabled) {
    baseStyles.backgroundColor = white;
    baseStyles.borderColor = main_yellow;
    baseText.color = main_yellow;
    smallText.color = main_yellow;
  }

  return StyleSheet.create({
    button: {
      ...baseStyles,
    },
    label: {
      ...baseText,
    },
    smallLabel: {
      ...smallText,
    },
  });
};
