import React, {useEffect, useState} from 'react';
import {EnrollmentScreenProps} from './EnrollmentScreen.types';

import EnrollmentScreenView from './EnrollmentScreen.view';

const EnrollmentScreen = ({navigation}: EnrollmentScreenProps) => {
  return <EnrollmentScreenView navigation={navigation} />;
};

export default EnrollmentScreen;
