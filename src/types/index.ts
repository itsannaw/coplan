import { FieldError, UseFormRegister } from "react-hook-form";

//signup

export type FormSignUpData = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };

  export type FormSignUpFieldProps = {
    placeholder: string;
    name: ValidSignUpFieldNames;
    register: UseFormRegister<FormSignUpData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };

  export type ValidSignUpFieldNames =
  | "email"
  | "username"
  | "password"
  | "confirmPassword";