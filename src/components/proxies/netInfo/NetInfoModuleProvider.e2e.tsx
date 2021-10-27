/* istanbul ignore file */
import { LaunchArguments } from 'react-native-launch-arguments';

let networkState: {
  type: string;
  isConnected: boolean;
  isInternetReachable: boolean;
  details: any;
};

const offlineState = {
  type: 'none',
  isConnected: false,
  isInternetReachable: false,
  details: null,
};

const defaultState = {
  type: 'cellular',
  isConnected: true,
  isInternetReachable: true,
  details: {
    isConnectionExpensive: true,
    cellularGeneration: '3g',
  },
};

interface ExpectedArgs {
  mockOffline: boolean;
}

if (LaunchArguments.value<ExpectedArgs>().mockOffline) {
  networkState = offlineState;
} else {
  networkState = defaultState;
}

const NetInfo = {
  addEventListener(listener: (state: any) => void) {
    listener(networkState);
  },
};

export default NetInfo;
