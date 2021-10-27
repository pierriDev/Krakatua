import type { OpUnitType } from 'dayjs';
import dayjs from './dayjs';

// eslint-disable-next-line import/prefer-default-export
export const isDueDate = (timeStamp: number, amount: number, unitOfTime: OpUnitType) => {
  // @ts-ignore
  const today = dayjs.utc().unix();
  // @ts-ignore
  const expirationDate = dayjs.unix(timeStamp).add(amount, unitOfTime).unix();
  return today > expirationDate;
};
