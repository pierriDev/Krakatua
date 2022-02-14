import React from 'react';
import {EnrollmentScreenProps} from './EnrollmentScreen.types';
import {useEnrollmentScreen} from './EnrollmentScreen.functions';
import EnrollmentScreenView from './EnrollmentScreen.view';
import Camera from '@/components/camera/Camera';

const EnrollmentScreen = ({navigation}: EnrollmentScreenProps) => {
  const {
    treinos,
    setIsVisible,
    setClasstime,
    classTime,
    isVisible,
    toggleClassModal,
    isCameraOpen,
    handleOpenCamera,
    handleBackButton,
  } = useEnrollmentScreen();

  if (isCameraOpen) {
    return (
      <Camera />
    )
  } else {
    return (
      <EnrollmentScreenView
        treinos={treinos}
        setIsVisible={setIsVisible}
        setClasstime={setClasstime}
        classTime={classTime}
        isVisible={isVisible}
        toggleClassModal={toggleClassModal}
        handleBackButton={handleBackButton}
        handleOpenCamera={handleOpenCamera}
      />
    );
  }
};

export default EnrollmentScreen;
