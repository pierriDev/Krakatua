export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const removeNonNumericCharacters = (value: string) => value.replace(/\D+/g, '');
export const encodeToFormUrlEncoded = (details: { [key: string]: string }) => Object.keys(details).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`).join('&');
export const stripHTMLTags = (html: string) => html.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/g, ' ');
export const formatAccountNumber = (accNumber: string): string => {
  const accNumberList = accNumber.split('-');
  return accNumberList[accNumberList.length - 1];
};
export const lowercase = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
export const lastFour = (s:string) => s.substr(s.length - 4);
