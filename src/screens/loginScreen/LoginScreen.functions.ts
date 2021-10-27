import { Navigation } from '@/common/types';
import { BIOMETRICS_ENABLED } from '@/components/biometricsModal/BiometricsModal.constants';
import { SIGNUP_WITH_PASSCODE } from '@/constants/enrollment';
import { PKCEConfig } from '@/constants/pkce';
import I18n from '@/localisation/I18n';
import AsyncStorage from '@/proxies/asyncStorage/AsyncStorageProvider';
import { isDueDate, localPersist } from '@/utils';
import jwtDecode from 'jwt-decode';
import { authorize } from 'react-native-app-auth';
import ReactNativeBiometrics from 'react-native-biometrics';
import { v4 as uuidv4 } from 'uuid';
import type { StoredTokenStatusType } from './LoginScreen.types';

const { get: getConfig } = localPersist('TokenStorage', true);
const { save: saveSessionId } = localPersist('SessionId');

const PASSCODE_FAILED_ATTEMPTS = 'PASSCODE_FAILED_ATTEMPTS';
const STORAGE_KEY = 'SETUP_PASSCODE';

const { remove: removeConfig } = localPersist('TokenStorage', true);
const { save: saveConfig } = localPersist('TokenStorage', true);

export type LoginWithPasscodeIfEnabledProps = {
  navigation: Navigation
  PKCEConfiguration: any
};

export const biometryTypeIfAvailable = async () => {
  try {
    const resultObject = await ReactNativeBiometrics.isSensorAvailable();
    const { available, biometryType } = resultObject;
    if (available) {
      return biometryType;
    }
  } catch (error) {
    return false;
  }
  return false;
};

export const checkBiometricsEnabled = async () => {
  const biometricsStatus = await AsyncStorage.getItem('biometrics');
  return biometricsStatus === BIOMETRICS_ENABLED;
};

export const checkPasscodeEnabled = async () => {
  const biometricsStatus = await AsyncStorage.getItem('SETUP_PASSCODE');
  return biometricsStatus === SIGNUP_WITH_PASSCODE;
};

export const loginWithPasscodeIfEnabled = async (
  { navigation, PKCEConfiguration }: LoginWithPasscodeIfEnabledProps,
) => {
  const isPasscodeEnabled = await checkPasscodeEnabled();
  if (isPasscodeEnabled) {
    const numberOfFails = await AsyncStorage.getItem(PASSCODE_FAILED_ATTEMPTS);
    if (numberOfFails === null) {
      navigation.navigate('Passcode', { status: 'enter', PKCEConfiguration });
    }
  } else {
    navigation.navigate('Login');
  }
};

export const loginWithAvailableAuthMethod = async (
  { onSuccessfulLogin, navigation, PKCEConfiguration }: any,
) => {
  const isBiometricsEnabled = await checkBiometricsEnabled();
  if (isBiometricsEnabled) {
    const biometryType = await biometryTypeIfAvailable();
    if (biometryType) {
      try {
        const promptMessage = I18n.t('login_biometrics');
        const result = await ReactNativeBiometrics.simplePrompt({ promptMessage });
        const { success } = result;
        if (success) {
          onSuccessfulLogin();
        } else {
          loginWithPasscodeIfEnabled({ navigation, PKCEConfiguration });
        }
      } catch (error) {
        loginWithPasscodeIfEnabled({ navigation, PKCEConfiguration });
      }
    } else {
      loginWithPasscodeIfEnabled({ navigation, PKCEConfiguration });
    }
  } else {
    loginWithPasscodeIfEnabled({ navigation, PKCEConfiguration });
  }
};

export const requestExternalLogin = async (
  { PKCEConfiguration, onSuccessfulLogin, navigation }: any,
) => {
  try {
    if (!PKCEConfiguration) throw Error(I18n.t('login_pkce_not_loaded'));
    const configuration = await authorize(PKCEConfiguration);
    if (!configuration.accessToken) throw Error(I18n.t('login_pkce_not_valid'));
    await saveConfig(configuration);
    AsyncStorage.getItem('SETUP_PASSCODE').then((hasCompletedLoginWithPasscode) => {
      if (hasCompletedLoginWithPasscode === SIGNUP_WITH_PASSCODE) {
        AsyncStorage.removeItem(PASSCODE_FAILED_ATTEMPTS);
        onSuccessfulLogin();
      } else {
        navigation.navigate('CreatePasscode');
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err); // TODO: Add proper Acceptance Criteria to handle errors.
  }
};

export const getTokenStatus = (config: any): StoredTokenStatusType => {
  if (!config) return 'nonexistent';
  const { accessToken } = config;
  if (!accessToken) return 'nonexistent';
  const { nbf: timeOfLastLogin }: any = jwtDecode(accessToken);
  const tokenExpired = isDueDate(timeOfLastLogin, 60, 'day');
  return tokenExpired ? 'expired' : 'valid';
};

export const handleTokenStatus = async ({ storedTokenStatus, inactive, navigation }: any) => {
  if (storedTokenStatus === 'expired') {
    await removeConfig();
    return;
  }
  if (storedTokenStatus !== 'valid') return;
  const enrollmentStatus = await AsyncStorage.getItem(STORAGE_KEY);

  if (enrollmentStatus === SIGNUP_WITH_PASSCODE) {
    if (inactive) {
      navigation.navigate('Inactive', { returnTo: 'Passcode' });
    } else {
      const numberOfFails = await AsyncStorage.getItem(PASSCODE_FAILED_ATTEMPTS);
      if (numberOfFails === null) {
        navigation.navigate('Passcode', { status: 'enter' });
      }
    }
  }
};

export const setTokenStatus = async (setStoredTokenStatus: any) => {
  const sessionId = uuidv4();
  await saveSessionId(sessionId);
  const storedConfig = await getConfig();
  const status = getTokenStatus(storedConfig);
  setStoredTokenStatus(status);
};

export const handlePCKEConfig = async ({
  storedTokenStatus,
  isDiscoveryRequestLoading,
  isDiscoveryRequestError,
  discovery,
  setPKCEConfig,
}: any) => {
  if (storedTokenStatus === 'unverified'
        || isDiscoveryRequestLoading
        || isDiscoveryRequestError) return;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { issuer, scopes_supported } = discovery;
  const { redirectUrl, clientId } = PKCEConfig;
  const config = {
    issuer,
    clientId,
    redirectUrl,
    scopes: [...scopes_supported],
  };
  setPKCEConfig(config);
};
