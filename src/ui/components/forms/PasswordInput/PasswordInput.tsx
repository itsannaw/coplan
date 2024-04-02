"use client";

import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./svg/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./svg/EyeFilledIcon";
import { useState } from "react";

interface PasswordInputProps {
  placeholder: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="w-[320px] md:w-[377px]"
      placeholder={props.placeholder}
      radius="sm"
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
  );
};
