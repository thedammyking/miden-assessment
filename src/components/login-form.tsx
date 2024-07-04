'use client';

import React from 'react';
import InputWithLabel from './ui/input-with-label';
import { Button } from './ui/button';
import { Form, Formik } from 'formik';
import { LoginFormValues } from '@/types/auth';
import { loginValidationSchema } from '@/validationSchemas/auth';

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
          <div className='mb-8 mx-auto max-w-[382px]'>
            <InputWithLabel
              label='Email'
              name='email'
              variant={'auth'}
              id='email'
              isRequired
              className='mb-6'
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
              className='mb-8'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.password ? errors.password : undefined}
            />
            <Button
              variant={'linpayBlue'}
              size={'linpayBlue'}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Proceed
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
