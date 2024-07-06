'use client';

import * as React from 'react';
import { ParsedCountry } from 'react-international-phone';
import { cva, type VariantProps } from 'class-variance-authority';
import { AsYouType, CountryCode } from 'libphonenumber-js/min';

import { PARSED_NIGERIA_DATA } from '@/data/contants';
import { cn } from '@/lib/utils';

import CountryPicker from './country-picker';

export const phoneInputVariants = cva(
  'flex h-10 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        auth: 'border-[#E1EBF5] h-12 rounded text-[#182D41] focus:outline-none focus:border-[#01C295] placeholder:text-[#182D4180] font-sans font-normal text-sm leading-normal'
      },
      defaultVariants: {
        variant: 'auth'
      }
    }
  }
);

const addPrefixToDialCode = (code: string, prefix = '+') => `${prefix}${code}`;

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof phoneInputVariants> {}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, type, variant, value, onChange, ...props }, ref) => {
    const [selectedCountry, setSelectedCountry] =
      React.useState<ParsedCountry>(PARSED_NIGERIA_DATA);

    const handleAsYouType = (inputValue: string, country: string) => {
      const asYouType = new AsYouType(country as CountryCode);
      asYouType.input(inputValue);
      return String(asYouType.getNumber()?.number || '');
    };

    const handleCountrySelect = (country: ParsedCountry) => {
      onChange?.({
        target: {
          value: addPrefixToDialCode(country.dialCode),
          name: props.name
        }
      } as any);
      setSelectedCountry(country);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = handleAsYouType(e.target.value, selectedCountry.iso2.toUpperCase());
      e.target.value = formatted || '';
      return onChange?.(e);
    };

    return (
      <div className='relative w-full h-max'>
        <CountryPicker handleSelection={handleCountrySelect} selectedCountry={selectedCountry} />
        <input
          type={type || 'tel'}
          className={cn(phoneInputVariants({ variant }), className, 'pl-[68px]')}
          ref={ref}
          value={value || addPrefixToDialCode(selectedCountry.dialCode)}
          onChange={handleOnChange}
          {...props}
        />
      </div>
    );
  }
);
PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
