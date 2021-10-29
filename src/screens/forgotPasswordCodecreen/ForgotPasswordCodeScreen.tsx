import React from 'react';

import ForgotPasswordCodeView from './ForgotPasswordCodeScreen.view';
import { ForgotPasswordCodeProps } from './ForgotPasswordCodeScreen.types';

const ForgotPasswordCodeScreen = ({ navigation, route }: ForgotPasswordCodeProps) => {

  return (
    <ForgotPasswordCodeView
      navigation={navigation}
    />
  );
};

export default ForgotPasswordCodeScreen;
