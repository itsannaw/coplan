"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { PasswordInput } from "../../forms/PasswordInput/PasswordInput";
import formSignup from "@/src/utils";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormSignUpData } from "@/src/types";
import UserSchema from "@/src/utils";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormSignUpData>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });

  const onSubmit = (data: FormSignUpData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-7">
        <span className="text-3xl font-medium">Sign Up</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 w-[377px]">
            <Input
              {...register("username")}
              radius="sm"
              type="username"
              placeholder="Username"
              isInvalid={errors.username ? true : false}
              errorMessage={errors.username?.message}
            />
            <Input
              {...register("email")}
              radius="sm"
              type="email"
              placeholder="Email"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
            />
            <PasswordInput
              register={register}
              name="password"
              placeholder="Password"
              error={errors.password}
            />
            <PasswordInput
              register={register}
              name="confirmPassword"
              placeholder="Confirm Password"
              error={errors.confirmPassword}
            />
          </div>
        </div>
        <Button
          className="bg-indigo-500 shadow-indigo-200 shadow-lg"
          size="lg"
          radius="sm"
          color="primary"
          type="submit"
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
    </form>
  );
}
