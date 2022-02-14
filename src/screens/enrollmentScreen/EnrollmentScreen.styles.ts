import {
  dark_grey,
  mid_grey,
  main_yellow,
  black,
} from '../../../native-base-theme/variables/colors';
import fonts from '../../../native-base-theme/variables/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const infoSize = screenHeight;

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
    zIndex: 0,
  },
  backContainer: {
    paddingTop: 28,
  },
  pageTitle: {
    marginTop: 28,
    ...fonts.large_title_book,
    textAlign: 'center',
  },
  input: {
    marginTop: 42,
    zIndex: 1,
  },
  helperContent: {
    marginTop: 24,
  },
  buttonContainer: {
    marginTop: 42,
    marginBottom: 62,
  },
});

export default styles;
