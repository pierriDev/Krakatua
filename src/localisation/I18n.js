import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en-GB';
import pt from './locales/pt-BR';

const locales = RNLocalize.getLocales();

console.log({locales})

if (Array.isArray(locales)) {
  I18n.locale = locales[1].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  pt,
};

export default I18n;
