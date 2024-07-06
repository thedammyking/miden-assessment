import { type ClassValue, clsx } from 'clsx';
import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js/min';
import { twMerge } from 'tailwind-merge';
import { string } from 'yup';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validatePhoneNumber = (
  errorMessage: string,
  countryCode?:
    | CountryCode
    | {
        defaultCountry?: CountryCode | undefined;
        defaultCallingCode?: string | undefined;
      }
    | undefined
) => {
  return string().test('is-phone-number-valid', errorMessage, (value?: string | null) => {
    if (!value) return false;
    return isValidPhoneNumber(value, countryCode);
  });
};

export const mapToObject = <K, D>(map: Map<K, D>): { [x: string]: D } =>
  Object.fromEntries(map.entries());
