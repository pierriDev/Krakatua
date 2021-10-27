/* eslint-disable global-require */
import { Button } from '@/components/button/Button';
import { light_grey } from '../../../native-base-theme/variables/colors';
import fonts from '../../../native-base-theme/variables/fonts';
import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View,
} from 'react-native';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface DefaultModalProps {
  visible: boolean
  imageSource?: any
  imageStyle?: object
  title: string
  titleStyle?: object
  description: string | null
  titleAndDescriptionContainerStyle?: object
  optionalButtonText?: string
  onOptionalButtonPress?: () => void
  bottomButtonText?: string
  onBottomButtonPress?: () => void
  bottomButtonOutlined?: boolean
  onClose?: () => void
  heightPercentage: number
  testID: string
}

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
  },
  container: {
    height: windowHeight * (3 / 4),
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 0,
    margin: 0,
  },
  topBar: {
    width: 32,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: light_grey,
    alignSelf: 'center',
    marginTop: 17,
  },
  closeImage: {
    position: 'absolute',
    top: 34,
    right: 34,
  },
  image: {
    alignSelf: 'center',
    marginTop: 100,
  },
  title: {
    ...fonts.title_3_medium,
    marginTop: 17,
    alignSelf: 'center',
    color: '#0c2e28',
  },
  description: {
    ...fonts.body_book,
    marginTop: 16,
    paddingHorizontal: 24,
    alignSelf: 'center',
    color: '#6d6d6d',
    textAlign: 'center',
  },
  optionalButtonContainer: {
    position: 'absolute',
    bottom: 110,
    width: '100%',
    paddingHorizontal: 25,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    paddingHorizontal: 25,
  },
});

const DefaultModal = ({
  visible,
  imageSource = null,
  imageStyle = {},
  title,
  titleStyle,
  description,
  titleAndDescriptionContainerStyle,
  optionalButtonText,
  onOptionalButtonPress,
  bottomButtonText,
  onBottomButtonPress,
  bottomButtonOutlined = false,
  onClose,
  heightPercentage = 75,
  testID,
} : DefaultModalProps) => (
  <Modal
    isVisible={visible}
    style={styles.modal}
  >
    <View
      style={[styles.container, { height: (windowHeight * heightPercentage) / 100 }]}
      testID={testID}
    >
      <View style={styles.topBar} />
      {onClose && (
      <TouchableWithoutFeedback onPress={() => onClose()} testID="closeModalButton">
        <Image source={require('@/assets/images/modal-close.png')} style={styles.closeImage} />
      </TouchableWithoutFeedback>
      )}
      {imageSource && <Image source={imageSource} style={[styles.image, imageStyle]} />}
      <View style={titleAndDescriptionContainerStyle}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {optionalButtonText && onOptionalButtonPress && (
      <View style={styles.optionalButtonContainer}>
        <Button
          title={optionalButtonText}
          onPress={onOptionalButtonPress}
          outlined
        />
      </View>
      )}
      {bottomButtonText && onBottomButtonPress && (
      <View style={styles.bottomButtonContainer}>
        <Button
          title={bottomButtonText}
          onPress={onBottomButtonPress}
          outlined={bottomButtonOutlined}
        />
      </View>
      )}
    </View>
  </Modal>
);

export default DefaultModal;
