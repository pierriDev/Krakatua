/* eslint-disable global-require */
import { white } from 'native-base-theme/variables/colors';
import React from 'react';
import {
  Dimensions, ImageBackground, StyleSheet, View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackgroundPageProps } from './BackgroundPage.types';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const BackgroundPage = ({ children } : BackgroundPageProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    background: {
      height: deviceHeight + safeAreaInsets.top + safeAreaInsets.bottom,
      width: deviceWidth,
      backgroundColor: white,
    },
    image: {
      height: deviceHeight / 3 + safeAreaInsets.top + safeAreaInsets.bottom,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: deviceWidth / 2,
      borderBottomLeftRadius: deviceWidth / 2,
      transform: [{ scaleX: 1.65 }],
    },
  });

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}
        source={require('@/assets/images/background.png')}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundPage;
