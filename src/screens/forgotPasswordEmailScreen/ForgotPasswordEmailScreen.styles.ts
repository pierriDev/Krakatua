import { dark_grey, mid_grey, main_yellow, black } from '../../../native-base-theme/variables/colors';
import fonts from '../../../native-base-theme/variables/fonts';
import { Dimensions, StyleSheet } from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const infoSize = screenHeight - 135;

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 55,
    alignSelf: 'center',
  },
  infoContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 135,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 0,
    height: infoSize,
  },
  backContainer: {
    paddingTop: 28,
  },
  newContainer: {
    marginTop: 42,
  },
  title: {
    ...fonts.large_title_book,
    textAlign: 'center',
  },
  helpText:{
    marginTop: 42,
    ...fonts.subheadline_medium,
    color: mid_grey,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});

export default styles;
