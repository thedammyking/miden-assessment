'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { useSignUpStepStore } from '@/providers/sign-up-step-provider';
import { AdminInfoFormValues, SignUpSteps } from '@/types/auth';
import { adminInfoValidationSchema } from '@/validation-schemas/auth';

import { Button } from '../ui/button';
import InputWithLabel from '../ui/input-with-label';
import Spinner from '../ui/spinner';

const AdminInfoForm: React.FC = () => {
  const initialFormValues: AdminInfoFormValues = {
    firstname: '',
    lastname: '',
    email: ''
  };

  const { setStep, addData } = useSignUpStepStore(state => state);

  const handleSubmission = async (values: AdminInfoFormValues) => {
    const username = `${values.firstname} ${values.lastname}`;
    addData(SignUpSteps.AdminInfo, { username, email: values.email });
    setStep(SignUpSteps.Password);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmission}
      validationSchema={adminInfoValidationSchema}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting, errors, touched }) => (
        <Form>
          <div className='w-full flex flex-col gap-6'>
            <InputWithLabel
              label='First Name'
              name='firstname'
              variant={'auth'}
              id='firstname'
              isRequired
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.firstname ? errors.firstname : undefined}
            />
            <InputWithLabel
              label='Last Name'
              name='lastname'
              variant={'auth'}
              id='lastname'
              isRequired
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched.lastname ? errors.lastname : undefined}
            />
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
        </Form>
      )}
    </Formik>
  );
};

export default AdminInfoForm;
