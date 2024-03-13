import { formatters } from './formatters';

export function formatPhoneNumber(value: string, cca2: string) {
  const digits = value.replace(/\D/g, '');
  const formatter = formatters[cca2];
  if (!formatter) {
    return value;
  }
  return formatter(digits);
}
