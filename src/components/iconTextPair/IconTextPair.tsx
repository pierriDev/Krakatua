import Icon from '@/components/icon';
import fonts from 'native-base-theme/variables/fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconTextPairProps } from './IconTextPair.types';

const ICON_SIZE = 24;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 8,
  },
  iconContainer: {},
  textContainer: {
    marginLeft: 8,
    paddingTop: 2,
    flex: 1,
  },
  text: {
    ...fonts.subheadline_book,
  },
});

const IconTextPair = ({
  iconName, text, iconColor = 'black', textColor = 'black', testID,
}:IconTextPairProps) => (
  <View style={styles.container} testID={testID}>
    <View>
      <Icon name={iconName} width={ICON_SIZE} height={ICON_SIZE} color={iconColor} />
    </View>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  </View>
);

export default IconTextPair;
