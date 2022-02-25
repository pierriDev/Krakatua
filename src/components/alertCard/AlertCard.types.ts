export type CardType = 'danger' | 'warning' | 'info' | 'success';
export interface GetTextProps {
  cardType?: CardType,
  content: string | null,
  limitText?: boolean,
  testID?: string,
}

export interface GetIconProps {
  cardType?: CardType,
  iconColor?: string,
  centerIcon?: boolean,
  noIcon?: boolean
  ICON_SIZE: number,
  iconName?: string,
  contentColor: string | undefined,
}

export interface AlertCardProps {
  cardType?: CardType,
  title?: string,
  iconColor?: string,
  iconName?: string,
  content?: string | null,
  customElement?: JSX.Element,
  limitText?: boolean,
  centerIcon?: boolean,
  hasRightIcon?: boolean,
  rightIconName?: string,
  isClickable?: boolean,
  testID?: string,
  noIcon?: boolean
  onPress?: () => void
}
