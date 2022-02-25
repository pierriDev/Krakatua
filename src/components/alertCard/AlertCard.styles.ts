import {
  error_red_90, gold_90, light_gray, sage_green, ultra_dark, white,
} from 'native-base-theme/variables/colors';
import fonts from 'native-base-theme/variables/fonts';
import { StyleSheet } from 'react-native';
import type { CardType } from './AlertCard.types';

const styleFactory = (cardType: CardType, ICON_SIZE? : number) => {
  const backgroundColors = new Map([
    ['warning', gold_90],
    ['danger', error_red_90],
    ['info', light_gray],
    ['success', sage_green],
  ]);
  const contentColors = new Map([
    ['warning', ultra_dark],
    ['danger', white],
    ['info', ultra_dark],
    ['success', white],
  ]);
  const backgroundColor = backgroundColors.get(cardType);
  const contentColor = contentColors.get(cardType);
  return {
    styles: StyleSheet.create({
      root: {
        flexDirection: 'row',
        borderRadius: 18,
        backgroundColor,
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      iconContainerCenter: {
        marginRight: 4,
        paddingTop: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconContainer: {
        marginRight: 4,
        paddingTop: 6,
      },
      text: {
        ...fonts.subheadline_book,
        color: contentColor,
      },
      title: {
        ...fonts.subheadline_medium,
      },
      textContainer: {
        padding: 8,
        flex: 1,
      },
      emptySpace: {
        width: ICON_SIZE,
        marginRight: 4,
        paddingTop: 6,
      },
    }),
    contentColor,
  };
};

export default styleFactory;
