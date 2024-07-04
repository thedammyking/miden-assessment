import LoginForm from '@/components/login-form';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login'
};

export default function Login() {
  return (
    <div className='flex items-center h-screen w-full'>
      <div className='px-[169px] w-full'>
        <header className='text-center mb-10'>
          <h1 className='font-sans font-medium text-[22px] leading-[120%]'>Login</h1>
        </header>
        <LoginForm />
        <div className='flex justify-between items-center *:font-serif text-xs leading-[150%] text-[#274B6B]'>
          <Link href='#'>Forgotten Password?</Link>
          <div>
            Don't have an account?{' '}
            <Link className='font-medium text-[#01C295]' href='/auth/sign-up'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
