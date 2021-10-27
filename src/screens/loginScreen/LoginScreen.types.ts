import type { Navigation, Route } from '@/common/types';

export interface LoginScreenProps {
  navigation: Navigation;
  route: Route;
}

export interface LoginScreenViewProps {
  navigation: Navigation;
  route: Route;
  onLoginPress: () => void

}

export type StoredTokenStatusType = 'unverified' | 'nonexistent' | 'valid' | 'expired';

export type StoredBiometricsStatusType = 'BIOMETRICS_ENABLED' | 'BIOMETRICS_CANCELLED';
