import jwtDecode from 'jwt-decode';
import { isDueDate } from '@/utils/time';

export type StoredTokenStatusType = 'unverified' | 'nonexistent' | 'valid' | 'expired';

export const getTokenStatus = (config: any): StoredTokenStatusType => {
  if (!config) return 'nonexistent';
  const { accessToken } = config;
  if (!accessToken) return 'nonexistent';
  const { nbf: timeOfLastLogin }: any = jwtDecode(accessToken);
  const tokenExpired = isDueDate(timeOfLastLogin, 60, 'day');
  return tokenExpired ? 'expired' : 'valid';
};
