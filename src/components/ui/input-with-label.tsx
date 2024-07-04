import React from 'react';
import { Label, labelVariants } from './label';
import { Input } from './input';
import { VariantProps } from 'class-variance-authority';

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
    <div className={className}>
      <Label variant={variant} htmlFor={inputProps.id}>
        {label}
        {isRequired && <span className='text-[#F6954C] ml-px'>*</span>}
      </Label>
      <Input {...inputProps} variant={variant} />
      {errorMessage && (
        <p className='mt-1 text-xs text-red-500 font-serif font-light leading-normal'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputWithLabel;
