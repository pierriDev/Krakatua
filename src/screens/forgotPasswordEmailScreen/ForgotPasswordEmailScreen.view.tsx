import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { ForgotPasswordEmailViewProps } from './ForgotPasswordEmailScreen.types';
import styles from './ForgotPasswordEmailScreen.styles'

import Background from '@/components/background/Background'
import { Button } from '@/components/button/Button';
import Icon from '@/components/icon';
import JailBrokenModal from '@/components/modal/JailBrokeModal';
import OfflineModal from '@/components/modal/OfflineModal';
import TextInput from '@/components/textInput';
import I18n from '@/localisation/I18n';
import { black, white } from '../../../native-base-theme/variables/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sendEmail } from './ForgotPasswordEmailScreen.functions';

const ForgotPasswordEmailView = ({ navigation }: ForgotPasswordEmailViewProps) => (
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
          { I18n.t('change_password_help_text') }
        </Text>
        <View style={styles.newContainer}>
          <TextInput label={I18n.t('login_username_label')} />
        </View>
        <View style={styles.newContainer}>
          <Button
            onPress={() => {sendEmail({navigation})}}
            title={I18n.t('send_code')}
          />
        </View>
      </View>
    </ScrollView>
    <OfflineModal />
    <JailBrokenModal />
  </>
);

export default ForgotPasswordEmailView;
