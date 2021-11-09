import React from 'react';

import ChangePasswordView from './ChangePasswordScreen.view';
import { ChangePasswordScreenProps } from './ChangePasswordScreen.types';

const ChangePasswordScreen = ({ navigation, route }: ChangePasswordScreenProps) => {

  return (
    <ChangePasswordView
      navigation={navigation}
    />
  );
};

export default ChangePasswordScreen;
