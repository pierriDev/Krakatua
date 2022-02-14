import { light_grey, mid_grey } from '../../../native-base-theme/variables/colors';
import fonts from '../../../native-base-theme/variables/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const infoSize = screenHeight - 135;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: light_grey,
    paddingHorizontal: 8,
    zIndex: 2,
    borderRadius: 6,
    width: '100%',
    
  },
  dropdownItem: {
    paddingVertical: 12,
  },
  dropdownText: {
    ...fonts.headline_medium,
    color: mid_grey,
  },
});

export default styles;
