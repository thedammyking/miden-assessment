import React from 'react';

import { Metadata } from 'next';

import SignUpClient from './client-sign-up';

export const metadata: Metadata = {
  title: 'Sign Up'
};

export default function SignUp() {
  return <SignUpClient />;
}
