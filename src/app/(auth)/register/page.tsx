"use client";

import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
} from "~/components/ui/dialog";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { formClasses } from "~/components/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GoogleIcon, FacebookIcon } from "~/components/icons";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "~/components/shared/logo";

// Define validation schema using Zod
// Define validation schema using Zod
const schema = z
  .object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(data);
  };

  return (
    <main className="w-full py-10">
      <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center space-y-16">
        <div className="flex w-full max-w-lg items-start ">
          <Logo />
        </div>
        <div className="mx-auto w-full max-w-lg space-y-5 px-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary-blue">
              Let’s Create Your Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Please enter your details, and create your free account!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-primary-blue" htmlFor="name">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
                className={formClasses.input}
              />
              {errors.name && (
                <p className="text-xs text-red-500">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-primary-blue" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
                className={formClasses.input}
              />
              {errors.email && (
                <p className="text-xs text-red-500">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-primary-blue" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className={formClasses.input}
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-primary-blue" htmlFor="confirm-password">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                {...register("confirmPassword")}
                className={formClasses.input}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">
                  {errors.confirmPassword.message?.toString()}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="h-11 w-full bg-primary-yellow text-white hover:bg-primary-yellow/80"
            >
              Create account
            </Button>
          </form>

          <div className="relative mx-auto flex w-full items-center justify-center text-xs text-primary-blue">
            <div className="h-[1px] w-11 bg-primary-blue/20"></div>
            <span className="mx-2">Or sign up with</span>
            <div className="h-[1px] w-11 bg-primary-blue/20"></div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-11 flex-1 border border-primary-blue text-primary-blue"
            >
              <GoogleIcon className="mr-2 h-4 w-4 " />
              Google
            </Button>
            <Button
              variant="outline"
              className="h-11 flex-1 border border-primary-blue text-primary-blue"
            >
              <FacebookIcon className="mr-2 h-4 w-4 " />
              Facebook
            </Button>
          </div>
          <div className="text-center text-xs text-muted-foreground text-primary-blue">
            By signing up, you agree to our{" "}
            <Link href="#" className="underline" prefetch={false}>
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline" prefetch={false}>
              Terms of Service
            </Link>
            .
          </div>
          <Separator />
          <div className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary-blue"
              prefetch={false}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
