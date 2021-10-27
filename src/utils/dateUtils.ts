import dayjs from './dayjs';

export const getFormattedDate = (date: string, format: EDateFormat) => {
  if (!dayjs(date).isValid()) return '';
  return dayjs(date).format(format);
};

// You can add as many formats as needed
export enum EDateFormat {
  MDYY_SLASH = 'M/D/YY',
  MDYY_DASH = 'M-D-YY',
  MMMDD_SPACE = 'MMM DD',
  MMMMYYYY_SPACE = 'MMMM YYYY',
  MMMM_SPACE_DD_YYYY = 'MMMM DD, YYYY',
}
