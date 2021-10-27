/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { AppState, AppStateStatus, Text } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from '@/components/icon/Icon';
import Fonts from '../../native-base-theme/variables/fonts';
import variables from '../../native-base-theme/variables/tigerbud';
import {
  HomeStack,
  LoginAndEnrollmentStack,
} from './StackNavigation';
import { black, main_yellow, white } from '../../native-base-theme/variables/colors';
import I18n from '@/localisation/I18n';

// Tabnavigation
const Tab = createBottomTabNavigator();
const Home = I18n.t('home');
// const Pay = I18n.t('payments');
// const Services = I18n.t('services');
// const Settings = I18n.t('settings');

export interface OnLogoutProps {
  onLogout: () => void;
}

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  return !(routeName === 'LegalPrivacy')
};

const Tabs = ({ onLogout }: OnLogoutProps) => (
  <Tab.Navigator
    screenOptions={({ route }: any) => ({
      tabBarVisible: getTabBarVisibility(route),
      tabBarLabel: ({ focused }: any) => (
        <Text style={focused ? {
          ...Fonts.tabbar_label,
          paddingTop: 5,
        } : {
          ...Fonts.tabbar_label_unselected,
          paddingTop: 5,
        }}
        >
          {route.name}
        </Text>
      ),
      tabBarIcon: ({ focused }: any) => {
        if (route.name === Home) {
          return (
            <Icon
              name={focused ? 'HomeActive' : 'Home'}
              height={24}
              width={24}
              color={main_yellow}
            />
          );
        }
      },
      tabBarStyle: {
        paddingTop: 10,
        borderTopWidth: 0,
        shadowColor: black,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6.27,
        position: 'absolute',
        backgroundColor: variables.containerBgColor,
      },
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    })}

  >
    <Tab.Screen
      name={Home}
      component={HomeStack}
    />
  </Tab.Navigator>
);

export default () => {
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn) {
    return (
      <NavigationContainer>
        <LoginAndEnrollmentStack
        />
      </NavigationContainer>
    );
  }

  const Main = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Main.Screen name="Tabs" component={() => <Tabs onLogout={() => setLoggedIn(false)} />} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
