

export const formatUK = (digits: string) => {
  let res = '';
  if (digits.length > 0) {
    res = `${digits.slice(0, 2)}`;
  }
  if (digits.length >= 3) {
    res = `${res} ${digits.slice(2, 6)}`;
  }
  if (digits.length >= 7) {
    res += ` ${digits.slice(6, 12)}`;
  }
  return res;
};

// Format mostly African phone numbers with 3-digit country code.
// 256123456789 -> 256 777 456789
// Country code: 256
// National destination code: 256
// Subscriber number: 456789
// Countires using this format: Uganda, Tanzania, Kenya, Rwanda, Burundi, South Sudan, etc.
export const formatZone2A = (digits: string) => {
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
