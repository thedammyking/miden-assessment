'use client';

import React from 'react';
import { LoginFormValues, SignUpSteps } from '@/types/auth';
import If from './if';
import BusinessInfoForm from './sign-up-steps/business-info';
import PasswordForm from './sign-up-steps/password';
import AdminInfoForm from './sign-up-steps/admin-info';
import SignUpStepIndicator from './ui/sign-up-step-indicator';

interface SignUpFormProps {
  handleSubmission(values: LoginFormValues): Promise<void>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmission }) => {
  const [currentStep, setCurrentStep] = React.useState<SignUpSteps>(SignUpSteps.BusinessInfo);
  const completedSteps: SignUpSteps[] = [];

  return (
    <>
      <SignUpStepIndicator currentStep={currentStep} completedSteps={completedSteps} />
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
