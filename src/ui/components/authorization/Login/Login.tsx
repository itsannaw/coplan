"use client";
import { FormUserData } from "@/src/types";
import { signinSchema } from "@/src/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Pick<FormUserData, "email">>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (data: Pick<FormUserData, "email">) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-7">
        <span className="text-2xl lg:text-3xl font-medium text-center md:text-start">
          Sign In
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 w-[320px] md:w-[377px]">
            <Input
              {...register("email")}
              radius="sm"
              type="email"
              placeholder="Email"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
            />
            <Input placeholder="Password" type="password" />
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
          type="submit"
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
    </form>
  );
}
