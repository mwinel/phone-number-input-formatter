/**
 * Formats a phone number according to the North American Numbering Plan (NANP) standard.
 * Example: 1234567890 -> 1 (123) 456-7890
 *
 * The North American Numbering Plan (NANP) is used by countries including the United States,
 * Canada, Bermuda, Bahamas, Barbados, Jamaica, etc.
 * https://en.wikipedia.org/wiki/List_of_country_calling_codes#Zone_1
 *
 * @param digits The raw digits of the phone number to be formatted.
 * @returns The formatted phone number.
 */
export const zone1Formatter = (digits: string): string => {
  let res = '';
  if (digits.length > 0) {
    res = `${digits.slice(0, 1)}`;
  }
  if (digits.length >= 2) {
    res = `${res} (${digits.slice(1, 4)})`;
  }
  if (digits.length >= 5) {
    res += ` ${digits.slice(4, 7)}`;
  }
  if (digits.length >= 8) {
    res += `-${digits.slice(7, 11)}`;
  }
  return res;
};
