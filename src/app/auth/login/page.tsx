import { Metadata } from 'next';
import Link from 'next/link';

import LoginForm from '@/components/login-form';
import { SIGN_UP_ROUTE_SLUG } from '@/data/page-routes';
import { LoginFormValues } from '@/types/auth';

export const metadata: Metadata = {
  title: 'Login'
};

export default function Login() {
  const handleFormSubmission = async (values: LoginFormValues) => {
    'use server';
    console.log('values', values);
  };
  return (
    <div className='flex items-center h-screen w-full overflow-y-scroll'>
      <div className='mx-auto w-full'>
        <header className='text-center mb-10'>
          <h1 className='font-sans font-medium text-[22px] leading-[120%]'>Login</h1>
        </header>
        <LoginForm handleSubmission={handleFormSubmission} />
        <div className='flex justify-between items-center *:font-serif text-xs leading-[150%] w-[382px] max-w-[80%] mx-auto text-[#274B6B]'>
          <Link href='#'>Forgotten Password?</Link>
          <div>
            Don&apos;t have an account?{' '}
            <Link className='font-medium text-[#01C295] ml-1' href={SIGN_UP_ROUTE_SLUG}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
