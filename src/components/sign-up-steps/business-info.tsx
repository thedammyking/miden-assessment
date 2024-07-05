'use client';

import React from 'react';
import InputWithLabel from '../ui/input-with-label';
import { Button } from '../ui/button';
import { Form, Formik } from 'formik';
import { BusinessInfoFormValues } from '@/types/auth';
import { businessInfoValidationSchema } from '@/validation-schemas/auth';
import SelectWithLabel from '../ui/select-with-label';
import { ORGANIZATION_TYPES } from '@/data/contants';
import PhoneInputWithLabel from '../ui/phone-input-with-label';

const BusinessInfoForm: React.FC = () => {
  const initialFormValues: BusinessInfoFormValues = {
    organizationName: '',
    organizationType: '',
    rcNumber: '',
    phoneNumber: ''
  };

  const handleSubmission = async (values: BusinessInfoFormValues) => {
    console.log('values', values);
  };
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmission}
      validationSchema={businessInfoValidationSchema}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting, errors, touched }) => (
        <Form>
          <div className='mb-8 mx-auto max-w-[382px]'>
            <div className='w-full flex flex-col gap-6'>
              <SelectWithLabel
                label='Organisation Type'
                name='organizationType'
                variant={'auth'}
                isRequired
                placeholder='Choose Organisation Type'
                value={values.organizationType}
                onValueChange={value =>
                  handleChange({
                    target: {
                      value,
                      name: 'organizationType'
                    }
                  })
                }
                errorMessage={touched.organizationType ? errors.organizationType : undefined}
                options={ORGANIZATION_TYPES}
              />
              <InputWithLabel
                label='Organisation Name'
                name='organizationName'
                variant={'auth'}
                id='organizationName'
                isRequired
                placeholder='E.g Shoprite Limited'
                value={values.organizationName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.organizationName ? errors.organizationName : undefined}
              />
              <InputWithLabel
                label='Registration Number'
                name='rcNumber'
                variant={'auth'}
                id='rcNumber'
                isRequired
                placeholder='E.g 1222324-45466'
                value={values.rcNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.rcNumber ? errors.rcNumber : undefined}
              />
              <PhoneInputWithLabel
                label='Phone Number'
                name='phoneNumber'
                variant={'auth'}
                id='phoneNumber'
                placeholder='E.g +2348022222222'
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.phoneNumber ? errors.phoneNumber : undefined}
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

export default BusinessInfoForm;
