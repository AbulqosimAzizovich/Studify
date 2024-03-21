import { ChangeEvent } from "react";

export interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface LoginFormProp {
  logoClass?: string;
}
export interface SocialLinksProp {
  logtext?:  string;
  btntext?: string;
}

export interface RegisterWizardProp {
  level: number;
}

interface FormValueInterFace {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  age: string;
  passPort: string;
  country:string
  state:string
  city:string
}

export interface RegisterWizardForm {
  updateUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: FormValueInterFace;
}
