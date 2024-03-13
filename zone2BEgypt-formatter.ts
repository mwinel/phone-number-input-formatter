/**
 * Formats a phone number with a 2-digit country code, for Egypt.
 * Example: 20612345678 -> 20 6 7774 5678
 *
 * https://en.wikipedia.org/wiki/List_of_country_calling_codes#Zone_2:_Mostly_Africa
 *
 * @param digits The raw digits of the phone number to be formatted.
 * @returns The formatted phone number.
 */
export const zone2BEgyptFormatter = (digits: string): string => {
  let res = '';
  if (digits.length > 0) {
    res = `${digits.slice(0, 2)}`;
  }
  if (digits.length >= 3) {
    res = `${res} ${digits.slice(2, 3)}`;
  }
  if (digits.length >= 4) {
    res = `${res} ${digits.slice(3, 7)}`;
  }
  if (digits.length >= 7) {
    res += ` ${digits.slice(7, 11)}`;
  }

  return res;
};
