import { object, string } from 'yup';

export const loginValidationSchema = object({
  email: string().email('Enter a valid email').required('Enter an email'),
  password: string().required('Enter password')
});
