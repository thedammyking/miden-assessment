'use client';

import React from 'react';
import { LoginFormValues, SignUpSteps } from '@/types/auth';
import If from './if';
import BusinessInfoForm from './sign-up-steps/business-info';
import PasswordForm from './sign-up-steps/password';
import AdminInfoForm from './sign-up-steps/admin-info';

interface SignUpFormProps {
  handleSubmission(values: LoginFormValues): Promise<void>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmission }) => {
  const [currentStep, setCurrentStep] = React.useState<SignUpSteps>(SignUpSteps.BusinessInfo);

  return (
    <div>
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
