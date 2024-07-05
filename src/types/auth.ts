export interface LoginFormValues {
  email: string;
  password: string;
}

export interface BusinessInfoFormValues {
  organizationType: string;
  organizationName: string;
  phoneNumber: string;
  rcNumber: string;
}

export interface AdminInfoFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

export enum SignUpSteps {
  BusinessInfo = 'business-info',
  AdminInfo = 'admin-info',
  Password = 'password'
}
