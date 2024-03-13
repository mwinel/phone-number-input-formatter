/**
 * Formats a phone number with a 3-digit country code, mostly used in African countries.
 * Example: 256123456789 -> 256 777 456789
 * 
 * The country code 256 corresponds to countries like Uganda, Tanzania, Kenya, Rwanda, Burundi, South Sudan, etc. 
 * Except for South Africa and Egypt which use 2-digit country codes.
 * https://en.wikipedia.org/wiki/List_of_country_calling_codes#Zone_2:_Mostly_Africa
 * 
 * @param digits The raw digits of the phone number to be formatted.
 * @returns The formatted phone number.
 */
export const zone2AFormatter = (digits: string): string => {
  let res = '';
  if (digits.length > 0) {
    res = `${digits.slice(0, 3)}`;
  }
  if (digits.length >= 4) {
    res = `${res} ${digits.slice(3, 6)}`;
  }
  if (digits.length >= 7) {
    res += ` ${digits.slice(6, 12)}`;
  }
  return res;
};
