// @flow

import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize,
    },
    '.errorMessage': {
      color: '#FF3B30',
      fontSize: variables.noteFontSize,
    },
    '.headerTitle': {
      fontSize: variables.headerFontSize,
      color: '#AF52DE',
      fontWeight: '500',
    },
  };

  return textTheme;
};
