import {
  dark_grey, 
  error_red, 
  main_yellow,
  mid_grey,
  sage_green, 
  ultra_dark,
} from 'native-base-theme/variables/colors';
import fonts from 'native-base-theme/variables/fonts';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    paddingBottom: 8,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  borderNormal: {
    borderBottomColor: mid_grey,
    borderBottomWidth: 1,
  },
  borderSelected: {
    borderBottomColor: main_yellow,
    borderBottomWidth: 2,
  },
  borderError: {
    borderBottomColor: error_red,
    borderBottomWidth: 2,
  },
  label: {
    position: 'absolute',
  },
  labelActive: {
    ...fonts.subheadline_book,
    color: dark_grey,
  },
  labelIdle: {
    ...fonts.body_book,
    color: mid_grey,
  },
  textInput: {
    ...fonts.body_book,
    width: '100%',
    color: ultra_dark,
    ...Platform.select({
      android: {
        position: 'absolute',
        margin: 0,
        padding: 0,
        bottom: 8,
      },
    }),
  },
  editableText: {
    ...fonts.body_book,
    color: dark_grey,
    position: 'absolute',
    width: '100%',
    top: 20,
  },
  textInputAndroidAdjustment: {
    ...Platform.select({
      android: {
        bottom: 7,
      },
    }),
  },
  textInputWithRightIcon: {
    paddingRight: 50,
  },
  textButtonCaption: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    zIndex: 2,
  },
  textButtonText: {
    ...fonts.subheadline_medium,
    color: sage_green,
  },
});

export default styles;
