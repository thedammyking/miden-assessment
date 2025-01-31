'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { LoginFormValues } from '@/types/auth';
import { loginValidationSchema } from '@/validation-schemas/auth';

import { Button } from './ui/button';
import InputWithLabel from './ui/input-with-label';
import Spinner from './ui/spinner';

interface LoginFormProps {
  handleSubmission(values: LoginFormValues): Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmission }) => {
  const initialFormValues: LoginFormValues = {
    email: '',
    password: ''
  };
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmission}
      validationSchema={loginValidationSchema}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting, errors, touched }) => (
        <Form>
          <div className='mb-8 mx-auto w-[382px] max-w-[80%]'>
            <div className='w-full flex flex-col gap-6'>
              <InputWithLabel
                label='Email'
                name='email'
                variant={'auth'}
                id='email'
                isRequired
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.email ? errors.email : undefined}
              />
              <InputWithLabel
                variant={'auth'}
                label='Password'
                name='password'
                id='password'
                isRequired
                type='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.password ? errors.password : undefined}
              />
            </div>
            <Button
              variant={'linpayBlue'}
              size={'linpayBlue'}
              className='mt-8'
              type='submit'
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting ? (
                <Spinner className='stroke-current' width={20} height={20} />
              ) : (
                'Proceed'
              )}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
