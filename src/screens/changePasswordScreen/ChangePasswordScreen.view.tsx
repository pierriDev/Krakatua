import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { ChangePasswordViewProps } from './ChangePasswordScreen.types';
import styles from './ChangePasswordScreen.styles'

import Background from '@/components/background/Background'
import { Button } from '@/components/button/Button';
import Icon from '@/components/icon';
import JailBrokenModal from '@/components/modal/JailBrokeModal';
import OfflineModal from '@/components/modal/OfflineModal';
import TextInput from '@/components/textInput';
import I18n from '@/localisation/I18n';
import { black, white } from '../../../native-base-theme/variables/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changePassword } from './ChangePasswordScreen.functions';

const ChangePasswordView = ({ navigation }: ChangePasswordViewProps) => (
  <>
    <Background />
    <ScrollView style={{ flex: 1 }} bounces={false}>
      <View style={styles.logoContainer}>
        <Icon name="Logo" width={200} height={50} color={white} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={navigation.goBack}
          >
            <Icon
              name={"ChevronLeft"}
              width={34}
              height={33}
              color={black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.newContainer}>
          <Text style={styles.title}>
            { I18n.t('change_password') }
          </Text>
        </View>
        <Text style={styles.helpText}>
          { I18n.t('type_code') }
        </Text>
        <View style={styles.newContainer}>
          <TextInput label={I18n.t('login_password_label')} />
        </View>
        <View style={styles.newContainer}>
          <TextInput label={I18n.t('repeat_password_label')} />
        </View>
        <View style={styles.newContainer}>
          <Button
            onPress={() => {changePassword({navigation})}}
            title={I18n.t('done')}
          />
        </View>
        <TouchableOpacity style={styles.newContainer}>
          <Text style={styles.resendText}> { I18n.t('didnt_receive_code') } </Text>
          <Text style={styles.resendText}> { I18n.t('click_to_resend') } </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <OfflineModal />
    <JailBrokenModal />
  </>
);

export default ChangePasswordView;
