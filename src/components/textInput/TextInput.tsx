/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  Text,
  TextInput as Input,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { black } from '../../../native-base-theme/variables/colors';
import Icon from '../icon';
import IconAndText from '../iconAndText/IconAndText';
import styles from './TextInput.styles';
import { InputBaseProps } from './TextInput.types';

const ICON_SIZE = 26;

const TextInput = (props: InputBaseProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(10));
  const {
    label,
    activeLabel,
    value,
    hasError,
    textButtonCaption,
    onRightButtonPress,
    iconButtonName,
    iconButtonColor = black,
    iconAndText,
    hintColor,
  } = props;
  const animatedStyles = {
    bottom: animation,
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const isActive = isFocused || value;
  const hasRightIcon = !!textButtonCaption || !!iconButtonName;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: isActive ? 44 : 10,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const bottomAdjustment = () => {
    const { value: inputValue, keyboardType } = props;
    if (!inputValue || keyboardType === 'visible-password') {
      return undefined;
    }
    return styles.textInputAndroidAdjustment;
  };

  const getLabel = () => {
    if (!activeLabel) return label;
    return isActive ? activeLabel : label;
  };

  const getActiveColors = () => {
    if (hintColor) {
      return isActive ? styles.labelActive : {
        ...styles.labelIdle,
        color: hintColor,
      };
    }
    return isActive ? styles.labelActive : styles.labelIdle;
  };

  useEffect(() => {
    startAnimation();
  }, [isFocused]);

  return (
    <View>
      <Animated.View style={[
        styles.container,
      ]}
      >
        <Animated.Text
          style={[
            styles.label,
            getActiveColors(),
            animatedStyles,
          ]}
        >
          {getLabel()}
        </Animated.Text>
        {textButtonCaption ? (
          <TouchableOpacity
            style={styles.textButtonCaption}
            onPress={onRightButtonPress}
          >
            <Text style={styles.textButtonText}>{textButtonCaption}</Text>
          </TouchableOpacity>
        ) : null}

        {iconButtonName && !textButtonCaption ? (
          <TouchableOpacity
            style={styles.textButtonCaption}
            onPress={onRightButtonPress}
          >
            <Icon
              name={iconButtonName}
              height={ICON_SIZE}
              width={ICON_SIZE}
              color={iconButtonColor}
            />
          </TouchableOpacity>
        ) : null}

        <Input
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            styles.textInput,
            hasRightIcon && styles.textInputWithRightIcon,
            bottomAdjustment(),
          ]}
        />
        <View style={[
          styles.line,
          isFocused ? styles.borderSelected : styles.borderNormal,
          hasError && styles.borderError,
        ]}
        />
      </Animated.View>
      {iconAndText ? (
        <IconAndText
          type={iconAndText.type}
          text={iconAndText.text}
        />
      ) : null}
    </View>
  );
};

export default TextInput;
