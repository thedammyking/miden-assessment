import { SignUpSteps } from '@/types/auth';

export const ORGANIZATION_TYPES = [
  {
    label: 'Limited Liability Company',
    value: 'limited_company'
  }
];

export const SIGN_UP_STEPS: Record<SignUpSteps, string> = {
  [SignUpSteps.BusinessInfo]: 'Business Info.',
  [SignUpSteps.AdminInfo]: 'Admin Info.',
  [SignUpSteps.Password]: 'Password'
};
