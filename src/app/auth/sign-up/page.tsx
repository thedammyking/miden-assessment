import React from 'react';

import { Metadata } from 'next';

import SignUpClient from './sign-up-client';

export const metadata: Metadata = {
  title: 'Sign Up'
};

export default function SignUp() {
  return <SignUpClient />;
}
