'use client';

import { HandleSignUp } from '@/types/auth';
import React, { createContext, useContext } from 'react';

interface SignUpFormSubmissionProviderProps {
  handleSubmission: HandleSignUp;
}

export const SignUpFormSubmissionContext = createContext<
  SignUpFormSubmissionProviderProps | undefined
>(undefined);

export const SignUpFormSubmissionProvider: React.FC<
  React.PropsWithChildren<SignUpFormSubmissionProviderProps>
> = ({ children, handleSubmission }) => {
  return (
    <SignUpFormSubmissionContext.Provider value={{ handleSubmission }}>
      {children}
    </SignUpFormSubmissionContext.Provider>
  );
};

export const useSignUpFormSubmission = () => {
  const counterContext = useContext(SignUpFormSubmissionContext);

  if (!counterContext) {
    throw new Error(`useSignUpFormSubmission must be used within SignUpFormSubmissionProvider`);
  }

  return counterContext;
};
