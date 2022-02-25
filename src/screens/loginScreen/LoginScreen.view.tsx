import Background from '../../components/background/Background';
import {Button} from '../../components/button/Button';
import Icon from '../../components/icon';
import JailBrokenModal from '../../components/modal/JailBrokeModal';
import OfflineModal from '../../components/modal/OfflineModal';
import TextInput from '../../components/textInput';
import I18n from '../../localisation/I18n';
import {white} from '../../../native-base-theme/variables/colors';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './LoginScreen.styles';
import type {LoginScreenViewProps} from './LoginScreen.types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreenView = ({navigation, onLoginPress}: LoginScreenViewProps) => (
  <>
    <Background />
    <ScrollView testID="loginScrollView" style={{flex: 1}} bounces={false}>
      <View style={styles.logoContainer}>
        <Icon name="Logo" width={200} height={50} color={white} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.usernameContainer}>
          <TextInput label={I18n.t('login_username_label')} />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput label={I18n.t('login_password_label')} secureTextEntry />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={onLoginPress}
            title={I18n.t('login_login_label')}
            outlined={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordEmail');
          }}>
          <Text style={styles.forgottenDetailsText}>
            {I18n.t('forgot_username_password')}
          </Text>
        </TouchableOpacity>
        <View style={styles.signupNowButtonContainer}>
          <View style={styles.separator} />
          <Text style={styles.notEnrolledYetText}>
            {I18n.t('not_enrolled_yet')}
          </Text>
          <Button
            onPress={() => navigation.navigate('Enrollment')}
            title={I18n.t('login_signup_label')}
            outlined
            testID="signUpNowButton"
          />
        </View>
      </View>
    </ScrollView>
    <OfflineModal />
    <JailBrokenModal />
  </>
);

export default LoginScreenView;
