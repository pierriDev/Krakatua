import Icon from '@/components/icon/Icon';
import {ultra_dark, white} from 'native-base-theme/variables/colors';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import type {ListCellItemProps} from '@/components/listCellItem';
import {formatNumber} from '@/utils/numberUtils';
import styles from './ListCellItem.styles';

const ICON_SIZE = 24;

const ListCellItem = ({
  title,
  contentRootStyle = {},
  primaryText,
  primaryTextColor = ultra_dark,
  primaryTextStyle = {},
  primaryTextComponent,
  secondaryText,
  secondaryTextStyle = {},
  hasBorder = true,
  hasLeftIcon = true,
  leftIconType = 'star',
  rightContainerType = 'icon',
  isElevated = false,
  hasRightIcon = true,
  rightIconName = 'ChevronRight',
  rightContainerPrimaryText,
  rightContainerPrimaryTextStyle,
  rightContainerSecondaryText,
  leftIconColor,
  rightIconColor,
  customRightIcon,
  variant,
  onBodyPress,
  onRightIconPress = () => {},
  onlyRightIconClickable = false,
  rightIconTestId,
  financialIconContainerStyle,
  testID,
}: ListCellItemProps) => {
  const iconName = leftIconType || 'star';
  let children;
  if (variant === 'financial' || variant === 'financial2') {
    const value = Number(rightContainerPrimaryText);
    const isNegative = value < 0;
    const valueStyle = isNegative
      ? styles.financialNegativeText
      : styles.financialText2;
    children = (
      <View
        style={[
          styles.financialRoot,
          hasBorder && styles.contentBorder,
          contentRootStyle,
        ]}>
        <View
          style={
            variant === 'financial'
              ? styles.financialLeftTextContainer
              : styles.financialLeftTextContainer2
          }>
          {primaryTextComponent || (
            <Text
              style={[
                variant === 'financial'
                  ? styles.financialText
                  : styles.financialTextVar2,
                {color: primaryTextColor},
                primaryTextStyle,
              ]}
              numberOfLines={2}>
              {primaryText}
            </Text>
          )}
          <Text style={[styles.financialText, secondaryTextStyle]}>
            {secondaryText}
          </Text>
        </View>
        <View style={styles.financialValuesContainer}>
          <Text style={[valueStyle, rightContainerPrimaryTextStyle]}>
            {formatNumber(value, {
              isCurrency: true,
              decimalPlaces: 2,
            })}
          </Text>
          <Text style={styles.financialText3}>
            {rightContainerSecondaryText}
          </Text>
        </View>
        <View
          style={[styles.financialIconContainer, financialIconContainerStyle]}>
          <Icon
            name="ChevronRight"
            width={ICON_SIZE}
            height={ICON_SIZE}
            color={rightIconColor}
          />
        </View>
      </View>
    );
  } else {
    children = (
      <>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        <View
          style={[
            styles.contentRoot,
            hasBorder && styles.contentBorder,
            isElevated && styles.elevated,
            contentRootStyle,
          ]}>
          {hasLeftIcon ? (
            <View
              style={[
                styles.leftContainer,
                leftIconType === 'premier' && styles.premierContainer,
              ]}>
              {leftIconType !== 'premier' ? (
                <Icon
                  name={iconName}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color={leftIconColor}
                />
              ) : (
                <Icon
                  name="Logo"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color={white}
                />
              )}
            </View>
          ) : null}
          <View style={styles.middleContainer}>
            <TouchableOpacity onPress={onBodyPress || onRightIconPress}>
              <Text
                style={[
                  styles.primaryText,
                  {color: primaryTextColor},
                  primaryTextStyle,
                ]}
                numberOfLines={2}>
                {primaryText}
              </Text>
              {secondaryText ? (
                <Text style={[styles.secondaryText, secondaryTextStyle]}>
                  {secondaryText}
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {hasRightIcon ? (
            <View style={styles.rightContainer}>
              {rightContainerType === 'icon' ? (
                <TouchableOpacity
                  onPress={onRightIconPress}
                  style={styles.iconContainer}
                  testID={rightIconTestId}>
                  {customRightIcon || (
                    <Icon
                      name={rightIconName}
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                      color={rightIconColor}
                    />
                  )}
                </TouchableOpacity>
              ) : null}
              {rightContainerType === 'text' ? (
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.rightContainerText,
                      !rightContainerSecondaryText && styles.noSecondaryText,
                    ]}>
                    {rightContainerPrimaryText}
                  </Text>
                  {rightContainerSecondaryText ? (
                    <Text
                      style={[
                        styles.rightContainerText,
                        styles.rightContainerSecondaryText,
                      ]}>
                      {rightContainerSecondaryText}
                    </Text>
                  ) : null}
                </View>
              ) : null}
            </View>
          ) : null}
        </View>
      </>
    );
  }
  return onlyRightIconClickable ? (
    <View testID={testID}>{children}</View>
  ) : (
    <TouchableOpacity testID={testID} onPress={onRightIconPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ListCellItem;
