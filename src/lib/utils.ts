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

export const obfuscateEmailPartialy = (email: string, unObfuscateCount = 4) => {
  try {
    string().email('Use valid email').validate(email);
    const getAtIndex = email.indexOf('@');
    const toObfuscate = email.substring(unObfuscateCount + 1, getAtIndex);
    const toObfuscateCount = toObfuscate.length;
    const obfuscated = '*'.repeat(toObfuscateCount);
    return `${email}`.replace(toObfuscate, obfuscated);
  } catch (error) {
    throw new Error(error as any);
  }
};

export const matchesWildcard = (path: string, pattern: string): boolean => {
  if (pattern.endsWith('/*')) {
    const basePattern = pattern.slice(0, -2);
    return path.startsWith(basePattern);
  }
  return path === pattern;
};
