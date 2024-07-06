'use client';

import React, { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createSignUpStepStore, type SignUpStepStore } from '@/stores/sign-up-step-store';

export type SignUpStepStoreApi = ReturnType<typeof createSignUpStepStore>;

export const SignUpStepStoreContext = createContext<SignUpStepStoreApi | undefined>(undefined);

export const SignUpStepStoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<SignUpStepStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSignUpStepStore();
  }

  return (
    <SignUpStepStoreContext.Provider value={storeRef.current}>
      {children}
    </SignUpStepStoreContext.Provider>
  );
};

export const useSignUpStepStore = <T,>(selector: (store: SignUpStepStore) => T): T => {
  const counterStoreContext = useContext(SignUpStepStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useSignUpStepStore must be used within SignUpStepStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
