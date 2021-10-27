import React, { useEffect, useState } from 'react';

import type { LoginScreenProps, StoredTokenStatusType } from './LoginScreen.types';
import LoginScreenView from './LoginScreen.view';

const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  // const [PKCEConfiguration, setPKCEConfig] = useState<any>(null);
  // const [storedTokenStatus, setStoredTokenStatus] = useState<StoredTokenStatusType>('unverified');

  // const {
  //   isError: isDiscoveryRequestError,
  //   isLoading: isDiscoveryRequestLoading,
  //   data: discovery,
  // } = useDiscovery();

  // const { onSuccessfulLogin } = route.params;
  // const { inactive } = route.params;

  // useEffect(() => {
  //   setTokenStatus(setStoredTokenStatus);
  // }, []);

  // useEffect(() => {
  //   if (inactive) {
  //     navigation.navigate('Inactive', { returnTo: 'Login' });
  //   }
  // }, [inactive]);

  // useEffect(() => {
  //   handleTokenStatus({ storedTokenStatus, inactive, navigation });
  // }, [storedTokenStatus]);

  // useEffect(() => {
  //   handlePCKEConfig({
  //     storedTokenStatus,
  //     isDiscoveryRequestLoading,
  //     isDiscoveryRequestError,
  //     discovery,
  //     setPKCEConfig,
  //   });
  // }, [
  //   isDiscoveryRequestError,
  //   isDiscoveryRequestLoading,
  //   discovery,
  //   storedTokenStatus,
  // ]);

  // useEffect(() => {
  //   loginWithAvailableAuthMethod({ onSuccessfulLogin, navigation, PKCEConfiguration });
  // }, [PKCEConfiguration]);

  return (
    <LoginScreenView
      navigation={navigation}
      route={route}
      onLoginPress={() => { navigation.navigate('')} }
    />
  );
};

export default LoginScreen;
