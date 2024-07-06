'use client';

import React from 'react';

import { useSignUpStepStore } from '@/providers/sign-up-step-provider';
import { SignUpSteps } from '@/types/auth';

import AdminInfoForm from './sign-up-steps/admin-info';
import BusinessInfoForm from './sign-up-steps/business-info';
import PasswordForm from './sign-up-steps/password';
import SignUpStepIndicator from './ui/sign-up-step-indicator';
import If from './if';

const SignUpForm: React.FC = () => {
  const { currentStep } = useSignUpStepStore(state => state);

  return (
    <div className='mb-8 mx-auto w-[382px] max-w-[80%]'>
      <SignUpStepIndicator />
      <If condition={currentStep === SignUpSteps.BusinessInfo}>
        <BusinessInfoForm />
      </If>
      <If condition={currentStep === SignUpSteps.AdminInfo}>
        <AdminInfoForm />
      </If>
      <If condition={currentStep === SignUpSteps.Password}>
        <PasswordForm />
      </If>
    </div>
  );
};

export default SignUpForm;
