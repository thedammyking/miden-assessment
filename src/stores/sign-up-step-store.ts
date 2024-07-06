import { createStore } from 'zustand/vanilla';

import {
  AdminInfoRequestData,
  BusinessInfoFormValues,
  PasswordFormValues,
  SignUpSteps
} from '@/types/auth';

export interface SignUpStepState {
  data: Map<SignUpSteps, BusinessInfoFormValues | AdminInfoRequestData | PasswordFormValues>;
  currentStep: SignUpSteps;
}

export interface SignUpStepActions {
  addData(
    key: SignUpSteps,
    data: BusinessInfoFormValues | AdminInfoRequestData | PasswordFormValues
  ): void;
  setStep(nextStep: SignUpSteps): void;
}

export type SignUpStepStore = SignUpStepState & SignUpStepActions;

export const defaultInitState: SignUpStepState = {
  data: new Map(),
  currentStep: SignUpSteps.BusinessInfo
};

export const createSignUpStepStore = (initState: SignUpStepState = defaultInitState) => {
  return createStore<SignUpStepStore>()(set => ({
    ...initState,
    addData: (key, data) =>
      set(state => {
        state.data.set(key, data);
        return state;
      }),
    setStep: nextStep => set(state => ({ ...state, currentStep: nextStep }))
  }));
};
