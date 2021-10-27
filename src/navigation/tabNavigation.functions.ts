import { AppStateStatus } from 'react-native';
import { isDueDate, localPersist } from '../utils';
import dayjs from '../utils/dayjs';

const { save, get } = localPersist('InactivityState');

const setUserActivityStorageKey = async () => {
  const time = dayjs().format();
  await save(time);
};

const getUserActivityStorageKey = async () => get();

const isUserInactive = async (): Promise<boolean> => {
  const time = await getUserActivityStorageKey();

  return isDueDate(dayjs(time).unix(), 10, 'minutes');
};

/* eslint-disable import/prefer-default-export */
export const checkInactivity = async (state: AppStateStatus): Promise<boolean> => {
  if (state === 'background' || state === 'inactive') {
    await setUserActivityStorageKey();
    return false;
  }

  if (state === 'active') {
    return isUserInactive();
  }

  return false;
};
