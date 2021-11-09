import React from 'react';

import ForgotPasswordEmailView from './ForgotPasswordEmailScreen.view';
import { ForgotPasswordEmailProps } from './ForgotPasswordEmailScreen.types';

const ForgotPasswordEmailScreen = ({ navigation, route }: ForgotPasswordEmailProps) => {

  return (
    <ForgotPasswordEmailView
      navigation={navigation}
    />
  );
};

export default ForgotPasswordEmailScreen;
