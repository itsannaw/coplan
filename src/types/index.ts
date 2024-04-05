import { FieldError, UseFormRegister } from "react-hook-form";

//user

export type FormUserData = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };

  export type FormUserFieldProps = {
    placeholder: string;
    name: ValidUserFieldNames;
    register: UseFormRegister<FormUserData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };

  export type ValidUserFieldNames =
  | "email"
  | "username"
  | "password"
  | "confirmPassword";