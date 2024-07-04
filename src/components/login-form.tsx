import React from 'react';
import InputWithLabel from './ui/input-with-label';
import { Button } from './ui/button';

const LoginForm = () => {
  return (
    <div className='mb-8'>
      <InputWithLabel label='Email' variant={'auth'} id='email' isRequired className='mb-6' />
      <InputWithLabel
        variant={'auth'}
        label='Password'
        id='password'
        isRequired
        type='password'
        className='mb-8'
      />
      <Button variant={'linpayBlue'} size={'linpayBlue'}>
        Proceed
      </Button>
    </div>
  );
};

export default LoginForm;
