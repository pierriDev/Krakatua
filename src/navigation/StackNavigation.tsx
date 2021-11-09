import { EHomeRoutes } from '@/navigation/StackNavigation.type';
import LoginScreen from '@/screens/loginScreen';
import ForgotPasswordEmailScreen from '@/screens/forgotPasswordEmailScreen/ForgotPasswordEmailScreen';
import ForgotPasswordCodeScreen from '@/screens/forgotPasswordCodecreen/ForgotPasswordCodeScreen';
import ChangePasswordScreen from '@/screens/changePasswordScreen/ChangePasswordScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { white } from 'native-base-theme/variables/colors';
import React from 'react';

const optionsScreen = {
  headerShown: false,
};

export interface SettingsStackProps {
  onLogout: () => void;
  props: any;
}

const Home = createStackNavigator();
export const HomeStack = () => (
  <Home.Navigator initialRouteName="Home">
    {/* <Home.Screen
      name={EHomeRoutes.HOME_SCREEN}
      component={HomeScreen}
      options={optionsScreen}
    /> */}
  </Home.Navigator>
);

const LoginAndEnrollment = createStackNavigator();
export const LoginAndEnrollmentStack = (props: any) => (
  <LoginAndEnrollment.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <LoginAndEnrollment.Screen
      name="Login"
      component={LoginScreen}
      initialParams={props}
    />
    <LoginAndEnrollment.Screen
      name="ForgotPasswordEmail"
      component={ForgotPasswordEmailScreen}
      initialParams={props}
    />
    <LoginAndEnrollment.Screen
      name="ForgotPasswordCode"
      component={ForgotPasswordCodeScreen}
      initialParams={props}
    />
    <LoginAndEnrollment.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      initialParams={props}
    />
  </LoginAndEnrollment.Navigator>
);