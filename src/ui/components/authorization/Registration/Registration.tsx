import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { PasswordInput } from "../../forms/PasswordInput/PasswordInput";

export default function Registration() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <span className="text-3xl font-medium">Sign Up</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 w-[377px]">
            <Input radius="sm" type="email" placeholder="Email" />
            <Input
              radius="sm"
              type="username"
              placeholder="Username"
            />
            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Confirm Password" />
          </div>
        </div>
        <Button
          className="bg-indigo-500 shadow-indigo-200 shadow-lg"
          size="lg"
          radius="sm"
          color="primary"
        >
          <span className="text-base font-medium">Register</span>
        </Button>
        <span className="text-base text-center font-medium text-gray-400">
          or continue with
        </span>
        <div className="flex justify-center gap-5">
          <Image
            src="/social/facebook.svg"
            width={40}
            height={43}
            alt="Facebook"
          />
          <Image src="/social/google.svg" width={40} height={42} alt="Google" />
        </div>
      </div>
    </>
  );
}
