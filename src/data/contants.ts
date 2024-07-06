import { SignUpSteps } from '@/types/auth';
import { defaultCountries } from 'react-international-phone';

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

const NIGERIA_DATA = defaultCountries.find(country => country[1].includes('ng'));
export const PARSED_NIGERIA_DATA = {
  name: NIGERIA_DATA?.[0]!,
  iso2: NIGERIA_DATA?.[1]!,
  dialCode: NIGERIA_DATA?.[2]!,
  format: NIGERIA_DATA?.[3],
  priority: NIGERIA_DATA?.[4],
  areaCodes: NIGERIA_DATA?.[5]
};

export const AUTHENTICATED_ROUTES = ['/*'];
