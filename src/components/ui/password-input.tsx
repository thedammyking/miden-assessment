'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { omit } from 'lodash';
import PasswordChecklist from './password-checklist';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export const passwordInputVariants = cva(
  'relative flex h-10 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50',
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

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof passwordInputVariants> {
  useCheckList?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, variant, useCheckList, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    return (
      <div className='w-full h-max relative'>
        <div className='w-full h-max relative'>
          {useCheckList && <PasswordChecklist password={props.value as string} />}
          <input
            type={isVisible ? 'text' : 'password'}
            className={cn(passwordInputVariants({ variant }), className)}
            ref={ref}
            {...omit(props, ['type'])}
          />
        </div>
        <button
          className='text-[#6F889E] absolute top-1/2 translate-y-[-50%] right-3'
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeOffIcon className='stroke-current' size={20} />
          ) : (
            <EyeIcon className='stroke-current' size={20} />
          )}
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
