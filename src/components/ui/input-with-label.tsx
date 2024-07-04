import React from 'react';
import { Label, labelVariants } from './label';
import { Input } from './input';
import { VariantProps } from 'class-variance-authority';

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof labelVariants> {
  label: string;
  isRequired?: boolean;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  isRequired,
  variant,
  ...inputProps
}) => {
  return (
    <div>
      <Label variant={variant} htmlFor={inputProps.id}>
        {label}
        {isRequired && <span className='text-[#F6954C] ml-px'>*</span>}
      </Label>
      <Input {...inputProps} variant={variant} />
    </div>
  );
};

export default InputWithLabel;
