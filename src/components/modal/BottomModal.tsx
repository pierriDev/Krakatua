import { light_grey } from 'native-base-theme/variables/colors';
import fonts from 'native-base-theme/variables/fonts';
import React from 'react';
import {
  StyleSheet, Text, TouchableWithoutFeedback, View,
} from 'react-native';

interface BottomModalProps {
  visible: boolean
  text: string
  onPress?: () => void
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    height: 112,
    width: '100%',
    bottom: 0,
    margin: 0,
  },
  container: {
    height: 112,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topBar: {
    width: 32,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: light_grey,
    alignSelf: 'center',
    marginTop: 17,
  },
  text: {
    ...fonts.body_book,
    textAlign: 'center',
    marginTop: 25,
  },
});

const BottomModal = ({ visible, text, onPress } : BottomModalProps) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BottomModal;
