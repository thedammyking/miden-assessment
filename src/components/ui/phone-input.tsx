import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const phoneInputVariants = cva(
  'flex h-10 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        auth: 'border-[#E1EBF5] h-12 rounded text-[#182D41] focus:outline-none focus:border-[#182D41] placeholder:text-[#182D41] font-sans font-normal text-sm leading-normal'
      },
      defaultVariants: {
        variant: 'auth'
      }
    }
  }
);

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof phoneInputVariants> {}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(phoneInputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
