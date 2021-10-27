import I18n from '../../localisation/I18n';
import JailMonkey from 'jail-monkey';
import React from 'react';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import DefaultModal from './DefaultModal';

const offlineImage = require('../../assets/images/offline.png');

interface IProps {}

interface JState {
  isJailBroken: Boolean
}

export default class JailBrokenModal extends React.Component<IProps, JState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isJailBroken: false };
  }

  componentDidMount() {
    DeviceInfo.isEmulator().then((isEmulator: Boolean) => {
      if (!isEmulator) {
        this.setState(() => ({ isJailBroken: JailMonkey.isJailBroken() }));
      }
    });
  }

  render() {
    return (
      <DefaultModal
          // eslint-disable-next-line react/destructuring-assignment
        visible={this.state.isJailBroken === true}
        imageSource={offlineImage}
        title={I18n.t('security_warning')}
        description={I18n.t(Platform.OS === 'android' ? 'security_description_android' : 'security_description_ios')}
        heightPercentage={75}
        testID="jailBrokenModal"
        optionalButtonText={I18n.t('leave_app')}
        onOptionalButtonPress={() => {}}
        bottomButtonText={I18n.t('accept_risk')}
        onBottomButtonPress={() => { this.setState(() => ({ isJailBroken: false })); }}
      />
    );
  }
}
