import { validatePhoneNumber } from '@/lib/utils';
import { object, ref, string } from 'yup';

export const loginValidationSchema = object({
  email: string().email('Enter a valid email').required('Enter an email'),
  password: string().required('Enter password')
});

export const businessInfoValidationSchema = object({
  organizationType: string().required('Select organization type'),
  organizationName: string().required('Enter organization name'),
  rcNumber: string().required('Enter registration number'),
  phoneNumber: validatePhoneNumber('Enter a valid phone number')
});

export const adminInfoValidationSchema = object({
  email: string().email('Enter a valid email').required('Enter an email'),
  firstname: string().required('Enter first name'),
  lastname: string().required('Enter last name')
});

export const passwordValidationSchema = object({
  password: string()
    .required('Enter password')
    .matches(/^[\s\S]{8,}$/, 'Must contain at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase')
    .matches(/[a-z]/, 'Must contain at least one lowercase')
    .matches(
      /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
      'Must contain at least one special case character'
    ),
  confirmPassword: string()
    .required('Re-enter your password')
    .oneOf([ref('password')], 'Passwords must match')
});
