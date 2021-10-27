import type { TFormatNumberConfig } from './utils.type';

const LOCALE = 'en-US';
const CURRENCY = 'USD';

export const formatNumber = (
  value: number | string | null,
  configuration?: TFormatNumberConfig,
) => {
  const val = Number(value);
  if (Number.isNaN(val)) return '';
  const customConfig = configuration || {};
  const config = {
    isCurrency: false,
    decimalPlaces: 0,
    ...customConfig,
  };
  const numberStyle = config.isCurrency ? 'currency' : 'decimal';
  return Intl.NumberFormat(LOCALE, {
    style: numberStyle,
    currency: CURRENCY,
    maximumFractionDigits: config.decimalPlaces,
    minimumFractionDigits: config.decimalPlaces,
  }).format(val);
};
