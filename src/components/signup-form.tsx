'use client';

import React from 'react';
import { LoginFormValues, SignUpSteps } from '@/types/auth';
import If from './if';
import BusinessInfoForm from './sign-up-steps/business-info';
import PasswordForm from './sign-up-steps/password';
import AdminInfoForm from './sign-up-steps/admin-info';
import SignUpStepIndicator from './ui/sign-up-step-indicator';
import { useSignUpStepStore } from '@/providers/sign-up-step-provider';

const SignUpForm: React.FC = () => {
  const { currentStep } = useSignUpStepStore(state => state);

  return (
    <>
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
    </>
  );
};

export default SignUpForm;
