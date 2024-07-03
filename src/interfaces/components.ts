
export interface FieldProps {
  id: string;
  type: string;
  placeholder: string;
  register: any;
  requiredMessage: string;
  errors?: any;
  label?: string;
  styles?: string;
  validate?: boolean;
}

export interface FormValues {
  name: string;
  email: string;
}

export interface FormData {
  email: string;
  password: string;
}

export interface HelpFormData {
  fullName: string;
  email: string;
  message: string;
}