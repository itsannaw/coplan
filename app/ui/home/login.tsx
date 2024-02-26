import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import PasswordInput from "../components/PasswordInput/PasswordInput";

export default function Login() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <span className="text-3xl font-medium">Sign in</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 w-[377px]">
            <Input isClearable radius="sm" type="email" placeholder="Email" />
            <PasswordInput />
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
          <Image src="/facebook.svg" width={40} height={43} alt="Facebook" />
          <Image src="/google.svg" width={40} height={42} alt="Google" />
        </div>
      </div>
    </>
  );
}
