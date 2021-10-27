import { dark_grey, mid_grey, main_yellow, black } from '../../../native-base-theme/variables/colors';
import fonts from '../../../native-base-theme/variables/fonts';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

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
    height: "100%"
  },
  usernameContainer: {
    marginTop: 70,
  },
  passwordContainer: {
    position: 'relative',
    marginTop: 13,
    marginBottom: 2,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  forgottenDetailsText: {
    textAlign: 'center',
    color: mid_grey,
  },
  separator: {
    width: '100%',
    paddingHorizontal: 24,
    height: 1,
    backgroundColor: main_yellow,
    marginTop: 200,
  },
  notEnrolledYetText: {
    ...fonts.subheadline_medium,
    color: black,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.34,
    marginTop: -10,
    marginBottom: 25,
    backgroundColor: '#fff',
    textAlign: 'center',
    width: 140,
    marginLeft: (screenWidth - 190) / 2,
  },
  signupNowButtonContainer: {
    marginBottom: 130,
  },
});

export default styles;
