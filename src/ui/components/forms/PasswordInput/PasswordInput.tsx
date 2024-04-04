"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "./svg";
import { FormSignUpFieldProps } from "@/src/types";

interface PasswordInputProps {
  placeholder: string;
}

export const PasswordInput: React.FC<FormSignUpFieldProps> = ({
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Input
        className="w-[320px] md:w-[377px]"
        placeholder={placeholder}
        radius="sm"
        {...register(name, { valueAsNumber })}
        isInvalid={error?.message ? true : false}
        errorMessage={error?.message}
        endContent={
          <button
            className="focus:outline-noner"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
    </>
  );
};
