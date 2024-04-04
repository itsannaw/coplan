import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { PasswordInput } from "../../forms/PasswordInput/PasswordInput";

export default function Login() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <span className="text-2xl lg:text-3xl font-medium text-center md:text-start">
          Sign In
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 w-[320px] md:w-[377px]">
            <Input isClearable radius="sm" type="email" placeholder="Email" />
            <PasswordInput placeholder="Password" />
          </div>
          <span className="text-right text-sm text-gray-400">
            Forgot password?
          </span>
        </div>
        <Button
          className="bg-indigo-500 shadow-indigo-200 shadow-lg"
          size="lg"
          radius="sm"
          color="primary"
        >
          <span className="text-base font-medium">Login</span>
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
