import {
  dark_green, dark_grey, mid_grey_60, main_yellow, white,
} from 'native-base-theme/variables/colors';
import fonts from 'native-base-theme/variables/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    ...fonts.subheadline_book,
  },
  contentRoot: {
    flexDirection: 'row',
    marginTop: 9,
    paddingBottom: 19,
    paddingTop: 19,
  },
  financialRoot: {
    flexDirection: 'row',
    paddingTop: 16,
    height: 72,
  },
  contentBorder: {
    borderBottomColor: mid_grey_60,
    borderBottomWidth: 1,
  },
  leftContainer: {
    width: 40,
    justifyContent: 'center',
  },
  premierContainer: {
    marginRight: 10,
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    justifyContent: 'center',
  },
  primaryText: {
    marginLeft: 8,
    ...fonts.body_book,
  },
  secondaryText: {
    ...fonts.subheadline_book,
    color: dark_grey,
    marginLeft: 8,
    marginTop: 4,
  },
  iconContainer: {
    marginRight: 8,
  },
  textContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rightContainerText: {
    ...fonts.subheadline_book,
    color: dark_grey,
  },
  rightContainerSecondaryText: {
    marginTop: 4,
  },
  noSecondaryText: {},
  image: {
    height: 32,
    width: 32,
  },
  elevated: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    backgroundColor: white,
    shadowColor: dark_grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  financialLeftTextContainer: {
    paddingLeft: 16,
    flex: 1,
  },
  financialLeftTextContainer2: {
    paddingLeft: 8,
    flex: 1,
  },
  financialText: {
    ...fonts.subheadline_book,
    textTransform: 'capitalize',
    lineHeight: 22,
    color: dark_green,
  },
  financialTextVar2: {
    ...fonts.headline_book,
    textTransform: 'capitalize',
    lineHeight: 22,
    color: dark_green,
  },
  financialText2: {
    ...fonts.subheadline_medium,
    lineHeight: 22,
  },
  financialText3: {
    ...fonts.subheadline_book,
    color: dark_grey,
    lineHeight: 22,
  },
  financialNegativeText: {
    ...fonts.subheadline_medium,
    lineHeight: 22,
    color: main_yellow,
  },
  financialIconContainer: {
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  financialValuesContainer: {
    alignItems: 'flex-end',
    marginLeft: 16,
  },
});

export default styles;
