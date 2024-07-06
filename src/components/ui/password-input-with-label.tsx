import React from 'react';
import clsx from 'clsx';

import { Label } from './label';
import { PasswordInput, PasswordInputProps } from './password-input';

interface PasswordInputWithLabelProps extends PasswordInputProps {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
}

const PasswordInputWithLabel: React.FC<PasswordInputWithLabelProps> = ({
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
      <PasswordInput {...inputProps} variant={variant} />
      {errorMessage && (
        <p className='text-xs text-red-500 font-serif font-light leading-normal'>{errorMessage}</p>
      )}
    </div>
  );
};

export default PasswordInputWithLabel;
