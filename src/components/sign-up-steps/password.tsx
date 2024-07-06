'use client';

import React from 'react';
import InputWithLabel from '../ui/input-with-label';
import { Button } from '../ui/button';
import { Form, Formik } from 'formik';
import { PasswordFormValues, SignUpRequestData, SignUpSteps } from '@/types/auth';
import { passwordValidationSchema } from '@/validation-schemas/auth';
import PasswordInputWithLabel from '../ui/password-input-with-label';
import { useSignUpStepStore } from '@/providers/sign-up-step-provider';
import { useSignUpFormSubmission } from '@/providers/sign-up-form-submission-provider';
import { mapToObject } from '@/lib/utils';
import Spinner from '../ui/spinner';

const PasswordForm: React.FC = () => {
  const initialFormValues: PasswordFormValues = {
    confirmPassword: '',
    password: ''
  };

  const { addData, data } = useSignUpStepStore(state => state);

  const { handleSubmission } = useSignUpFormSubmission();

  const handleSubmit = async (values: PasswordFormValues) => {
    await addData(SignUpSteps.Password, values);
    const dataFromMap = mapToObject(data);
    const payload = Object.keys(dataFromMap).reduce((acc, curr) => {
      acc = {
        ...acc,
        ...dataFromMap[curr]
      };
      return acc;
    }, {} as SignUpRequestData);
    await handleSubmission(payload);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmit}
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
                useCheckList
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <PasswordInputWithLabel
                variant={'auth'}
                label='Confirm Password'
                name='confirmPassword'
                id='confirmPassword'
                isRequired
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

export default PasswordForm;
