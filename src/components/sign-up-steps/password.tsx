'use client';

import React from 'react';
import InputWithLabel from '../ui/input-with-label';
import { Button } from '../ui/button';
import { Form, Formik } from 'formik';
import { PasswordFormValues } from '@/types/auth';
import { passwordValidationSchema } from '@/validation-schemas/auth';
import PasswordInputWithLabel from '../ui/password-input-with-label';

const PasswordForm: React.FC = () => {
  const initialFormValues: PasswordFormValues = {
    confirmPassword: '',
    password: ''
  };

  const handleSubmission = async (values: PasswordFormValues) => {
    console.log('values', values);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmission}
      validationSchema={passwordValidationSchema}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting, errors, touched }) => (
        <Form>
          <div className='mb-8 mx-auto max-w-[382px]'>
            <div className='w-full flex flex-col gap-6'>
              <PasswordInputWithLabel
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
              <InputWithLabel
                variant={'auth'}
                label='Confirm Password'
                name='confirmPassword'
                id='confirmPassword'
                isRequired
                type='password'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.confirmPassword ? errors.confirmPassword : undefined}
              />
            </div>
            <Button
              variant={'linpayBlue'}
              size={'linpayBlue'}
              className='mt-8'
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

export default PasswordForm;
