import Icon from '@/components/icon';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styleFactory from './AlertCard.styles';
import type {
  AlertCardProps,
  GetIconProps,
  GetTextProps,
} from './AlertCard.types';

const GetText = ({limitText, content, cardType = 'warning'}: GetTextProps) => {
  const {styles} = styleFactory(cardType);
  return limitText ? (
    <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
      {content}
    </Text>
  ) : (
    <Text ellipsizeMode="tail" style={styles.text}>
      {content}
    </Text>
  );
};

const GetIcon = ({
  centerIcon,
  noIcon,
  ICON_SIZE,
  iconColor,
  iconName = 'warning',
  contentColor,
  cardType = 'warning',
}: GetIconProps) => {
  const {styles} = styleFactory(cardType, ICON_SIZE);
  if (noIcon) {
    return <View style={styles.emptySpace} />;
  }
  return centerIcon ? (
    <View style={styles.iconContainerCenter}>
      <Icon
        name={iconName}
        width={ICON_SIZE}
        height={ICON_SIZE}
        color={iconColor || contentColor}
      />
    </View>
  ) : (
    <View style={styles.iconContainer}>
      <Icon
        name={iconName}
        width={ICON_SIZE}
        height={ICON_SIZE}
        color={iconColor || contentColor}
      />
    </View>
  );
};

const AlertCard = ({
  title,
  content,
  customElement,
  cardType = 'warning',
  iconName = 'warning',
  iconColor,
  limitText,
  centerIcon,
  hasRightIcon,
  rightIconName = 'ChevronRight',
  isClickable,
  noIcon,
  onPress,
}: AlertCardProps) => {
  const {styles, contentColor} = styleFactory(cardType);
  const ICON_SIZE = 24;
  // @ts-ignore
  const CustomText = customElement as React.ElementType;
  if (isClickable) {
    return (
      <TouchableOpacity style={styles.root} onPress={onPress}>
        <GetIcon
          iconName={iconName}
          centerIcon={centerIcon}
          noIcon={noIcon}
          ICON_SIZE={ICON_SIZE}
          iconColor={iconColor}
          contentColor={contentColor}
          cardType={cardType}
        />

        <View style={styles.textContainer}>
          {!!title && <Text style={[styles.text, styles.title]}>{title}</Text>}
          {customElement ? (
            <CustomText />
          ) : (
            <GetText
              content={content || ''}
              limitText={limitText}
              cardType={cardType}
            />
          )}
        </View>
        {hasRightIcon ? (
          <>
            {centerIcon ? (
              <View style={styles.iconContainerCenter}>
                <Icon
                  name={rightIconName}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color={iconColor || contentColor}
                />
              </View>
            ) : (
              <View style={styles.iconContainer}>
                <Icon
                  name={rightIconName}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color={iconColor || contentColor}
                />
              </View>
            )}
          </>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.root}>
      <GetIcon
        iconName={iconName}
        centerIcon={centerIcon}
        noIcon={noIcon}
        ICON_SIZE={ICON_SIZE}
        iconColor={iconColor}
        contentColor={contentColor}
        cardType={cardType}
      />
      <View style={styles.textContainer}>
        {!!title && <Text style={[styles.text, styles.title]}>{title}</Text>}
        {customElement ? (
          <CustomText />
        ) : (
          <GetText
            content={content || ''}
            limitText={limitText}
            cardType={cardType}
          />
        )}
      </View>
      {hasRightIcon ? (
        <>
          {centerIcon ? (
            <View style={styles.iconContainerCenter}>
              <Icon
                name={rightIconName}
                width={ICON_SIZE}
                height={ICON_SIZE}
                color={iconColor || contentColor}
              />
            </View>
          ) : (
            <View style={styles.iconContainer}>
              <Icon
                name={rightIconName}
                width={ICON_SIZE}
                height={ICON_SIZE}
                color={iconColor || contentColor}
              />
            </View>
          )}
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AlertCard;
