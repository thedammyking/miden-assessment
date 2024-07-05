import React from 'react';
import { Label } from './label';
import * as SelectPrimitive from '@radix-ui/react-select';
import { VariantProps } from 'class-variance-authority';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue
} from './select';
import { Options } from '@/types/generics';
import { isEmpty, uniqueId } from 'lodash';

interface SelectWithLabelProps
  extends SelectPrimitive.SelectProps,
    VariantProps<typeof selectTriggerVariants> {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
  options: Options;
  placeholder?: string;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  label,
  isRequired,
  errorMessage,
  variant,
  options,
  placeholder,
  ...selectProps
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <Label variant={'auth'}>
        {label}
        {isRequired && <span className='text-[#F6954C] ml-px'>*</span>}
      </Label>
      <Select {...selectProps}>
        <SelectTrigger variant={variant} className='w-full'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {!isEmpty(options) && (
          <SelectContent>
            {options?.map(({ label, value }) => (
              <SelectItem key={uniqueId('select-item')} variant={variant} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
      {errorMessage && (
        <p className='text-xs text-red-500 font-serif font-light leading-normal'>{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectWithLabel;
