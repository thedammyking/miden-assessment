import { object, ref, string } from 'yup';

export const loginValidationSchema = object({
  email: string().email('Enter a valid email').required('Enter an email'),
  password: string().required('Enter password')
});

export const businessInfoValidationSchema = object({
  organizationType: string().required('Enter first name'),
  organizationName: string().required('Enter last name'),
  rcNumber: string().required('Enter last name'),
  phoneNumber: string().required('Enter last name')
});

export const adminInfoValidationSchema = object({
  email: string().email('Enter a valid email').required('Enter an email'),
  firstname: string().required('Enter first name'),
  lastname: string().required('Enter last name')
});

export const passwordValidationSchema = object({
  password: string().required('Enter password'),
  confirmPassword: string()
    .required('Re-enter your password')
    .oneOf([ref('password')], 'Passwords must match')
});
