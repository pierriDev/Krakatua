/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect, useState } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  Text,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  TextInput as TextInputNative,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { black } from 'native-base-theme/variables/colors';
import Icon from '../icon';
import IconAndText from '../iconAndText/IconAndText';
import ConditionalVisibility from '../conditionalVisibility/ConditionalVisibility';
import styles from './TextInput.styles';
import type { TextInputProps } from './TextInput.types';

const ICON_SIZE = 26;

const TextInput: FC<TextInputProps> = ({
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
  isEditable = false,
  onFocus,
  onBlur,
  keyboardType,
  containerStyle,
  disableAnimation = false,
  mask,
  ...rest
}) => {
  const [isEditing, setIsEditing] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(10));

  const animatedStyles = {
    bottom: animation,
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    setIsEditing(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const isActive = isFocused || value || disableAnimation;
  const hasRightIcon = !!textButtonCaption || !!iconButtonName;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: isActive ? 44 : 10,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const bottomAdjustment = () => {
    if (!value || keyboardType === 'visible-password') {
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
    <View style={containerStyle}>
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
        <ConditionalVisibility isVisible={!isEditable || isEditing}>
          {mask ? (
            <TextInputMask
              {...rest}
              mask={mask}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
              style={[
                styles.textInput,
                hasRightIcon && styles.textInputWithRightIcon,
                bottomAdjustment(),
              ]}
              autoFocus={isEditable}
            />
          ) : (
            <TextInputNative
              {...rest}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
              style={[
                styles.textInput,
                hasRightIcon && styles.textInputWithRightIcon,
                bottomAdjustment(),
              ]}
              autoFocus={isEditable}
            />
          )}
          <View style={[
            styles.line,
            isFocused ? styles.borderSelected : styles.borderNormal,
            hasError && styles.borderError,
          ]}
          />
        </ConditionalVisibility>
        <ConditionalVisibility isVisible={!isEditing && isEditable}>
          <Text
            style={styles.editableText}
            onPress={() => {
              setIsEditing(true);
              setIsFocused(true);
            }}
            numberOfLines={2}
          >
            {value}
          </Text>
        </ConditionalVisibility>

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
