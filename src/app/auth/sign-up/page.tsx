import SignUpForm from '@/components/signup-form';
import { LOGIN_ROUTE_SLUG } from '@/data/page-routes';
import { LoginFormValues } from '@/types/auth';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up'
};

export default function SignUp() {
  const handleFormSubmission = async (values: LoginFormValues) => {
    'use server';
    console.log('values', values);
  };
  return (
    <div className='h-full pt-32 pb-14 overflow-y-scroll'>
      <div className='px-[169px] w-full'>
        <header className='text-center mb-10'>
          <h1 className='font-sans font-medium text-[22px] leading-[120%]'>Sign Up</h1>
        </header>
        <SignUpForm handleSubmission={handleFormSubmission} />
        <div className='flex justify-center items-center text-xs leading-[150%] max-w-[382px] mx-auto text-[#274B6B]'>
          <p className='font-serif'>
            Already have an account?{' '}
            <Link className='font-medium text-[#01C295] ml-1' href={LOGIN_ROUTE_SLUG}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
