import IconTextPair from '@/components/iconTextPair';
import { error_red, mid_grey, sage_green } from 'native-base-theme/variables/colors';
import React from 'react';
import { IconAndTextProps } from '../textInput/TextInput.types';

const IconAndText = ({ type, text, testID }: IconAndTextProps) => {
  const iconName = type === 'info' ? 'Information' : 'WarningRound';
  const iconColor = type === 'info' ? sage_green : error_red;
  const textColor = type === 'info' ? mid_grey : error_red;

  return (
    <IconTextPair
      iconName={iconName}
      text={text}
      iconColor={iconColor}
      textColor={textColor}
      testID={testID}
    />
  );
};

export default IconAndText;
