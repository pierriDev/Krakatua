import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export const useEnrollmentScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [classTime, setClasstime] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const navigation = useNavigation();

  const treinos = [
    {
      id: 1,
      titulo: 'Treino 1',
      hora_inicio: '09:00',
      hora_final: '10:00',
    },
    {
      id: 2,
      titulo: 'Treino 2',
      hora_inicio: '10:00',
      hora_final: '11:00',
    },
    {
      id: 3,
      titulo: 'Treino 3',
      hora_inicio: '11:00',
      hora_final: '12:00',
    },
    {
      id: 4,
      titulo: 'Treino 4',
      hora_inicio: '13:00',
      hora_final: '14:00',
    },
    {
      id: 5,
      titulo: 'Treino 5',
      hora_inicio: '14:00',
      hora_final: '15:00',
    },
  ];

  const toggleClassModal = () => {
    setIsVisible(!isVisible)
  }

  const handleBackButton = () => {
    navigation.goBack();
  }

  const handleOpenCamera = () => {
    setIsCameraOpen(!isCameraOpen)
  }

  return {
    treinos,
    setIsVisible,
    setClasstime,
    classTime,
    isVisible,
    toggleClassModal,
    isCameraOpen,
    handleOpenCamera,
    handleBackButton,
  }
};
