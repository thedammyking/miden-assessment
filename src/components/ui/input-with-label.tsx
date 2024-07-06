import React from 'react';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

import { Input } from './input';
import { Label, labelVariants } from './label';

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof labelVariants> {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  isRequired,
  variant,
  errorMessage,
  className,
  ...inputProps
}) => {
  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      <Label variant={variant} htmlFor={inputProps.id}>
        {label}
        {isRequired && <span className='text-[#F6954C] ml-px'>*</span>}
      </Label>
      <Input {...inputProps} variant={variant} />
      {errorMessage && (
        <p className='text-xs text-red-500 font-serif font-light leading-normal'>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputWithLabel;
