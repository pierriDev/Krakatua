import I18n from '../../localisation/I18n';
import { NetInfoState } from '@react-native-community/netinfo';
import React from 'react';
import { StyleSheet } from 'react-native';
import NetInfo from '../proxies/netInfo/NetInfoModuleProvider';
import DefaultModal from './DefaultModal';

interface IProps {}

interface IState {
  networkStatus: 'loading' | 'offline' | 'online'
}

const styles = StyleSheet.create({
  titleStyle: {
    marginBottom: 24,
  },
  titleAndDescriptionContainerStyle: {
    marginTop: 228,
    paddingHorizontal: 9,
  },
});

export default class OfflineModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { networkStatus: 'loading' };
  }

  componentDidMount() {
    NetInfo.addEventListener((state) => {
      this.updateNetworkStatus(state);
    });
  }

  updateNetworkStatus = (state: NetInfoState) => {
    this.setState(() => ({ networkStatus: state.isConnected ? 'online' : 'offline' }));
  };

  render() {
    return (
      <DefaultModal
          // eslint-disable-next-line react/destructuring-assignment
        visible={this.state.networkStatus === 'offline'}
        title={I18n.t('offline')}
        titleStyle={styles.titleStyle}
        description={I18n.t('offline_description')}
        titleAndDescriptionContainerStyle={styles.titleAndDescriptionContainerStyle}
        onClose={() => this.setState(() => ({ networkStatus: 'loading' }))}
        heightPercentage={75}
        testID="offlineModal"
      />
    );
  }
}
