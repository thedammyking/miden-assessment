import { SIGN_UP_STEPS } from '@/data/contants';
import { SignUpSteps } from '@/types/auth';
import clsx from 'clsx';
import { uniqueId } from 'lodash';
import { CheckIcon } from 'lucide-react';
import React from 'react';

interface SignUpStepIndicatorProps {
  currentStep: SignUpSteps;
  completedSteps: SignUpSteps[];
}

const SignUpStepIndicator: React.FC<SignUpStepIndicatorProps> = ({
  currentStep,
  completedSteps
}) => {
  const stepKeys = Object.keys(SIGN_UP_STEPS) as SignUpSteps[];

  return (
    <div className='mb-10 px-[52px] w-full flex justify-between items-center'>
      {stepKeys.map((step, index) => {
        const isActive = currentStep === step;
        const stepCount = index + 1;
        const isCompleted = completedSteps.includes(step);
        return (
          <div
            className={clsx(
              'w-[75px] flex flex-col gap-2 items-center relative',
              index !== stepKeys.length - 1 &&
                'before:absolute before:w-10/12 before:h-[2px] before:rounded before:bg-[#B1CCE5] before:top-3 before:left-3/4'
            )}
            key={uniqueId('sign-up-step')}
          >
            <div
              className={clsx(
                'w-6 h-6 rounded-full flex justify-center items-center',
                isActive && 'text-[#01C295]',
                !isActive && 'text-[#B1CCE5]',
                !isCompleted && 'border border-solid border-current',
                isCompleted && 'bg-[#121D3D]'
              )}
            >
              {isCompleted ? (
                <CheckIcon className='w-[11px] text-white' />
              ) : (
                <p className='font-serif text-[10.5px]'>{stepCount}</p>
              )}
            </div>
            <p className='font-sans text-xs text-[#274B6B] font-normal'>{SIGN_UP_STEPS[step]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SignUpStepIndicator;
