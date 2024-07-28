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

// Define validation schema using Zod
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: {
    email: string;
    password: string;
  }) => {

    const res = await signIn("algeria-wow", {
      username: data.email,
      password: data.password,
      // redirect: false,
      callbackUrl: "/where-to-stay",
    });


    // if (!res?.error) {
    //   // router.push(searchParams?.callbackUrl ?? (process.env.NEXT_PUBLIC_URL as string));
    //   router.push("/dashboard");
    // }
  };

  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="inline-flex h-11 w-fit items-center justify-center rounded-xl text-sm font-medium text-primary text-primary-yellow hover:bg-transparent hover:text-primary-yellow focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
        >
          Log in
        </Button>
      </DialogTrigger> */}
      <Link
        className="inline-flex h-11 w-fit items-center justify-center rounded-xl text-sm font-medium text-primary text-primary-yellow hover:bg-transparent hover:text-primary-yellow focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
        href="/login"
      >
        Log in
      </Link>

      <DialogContent className="flex-1 overflow-y-auto px-6 py-8">
        <DialogHeader className="-ml-3 mb-2">{/* <Logo /> */}</DialogHeader>
        <div className="mx-auto w-full max-w-lg space-y-5 px-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary-blue">
              Welcome back!
            </h1>
            <p className="text-sm text-muted-foreground">
              Please enter your details to sign in
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <Button
              type="submit"
              className="h-11 w-full bg-primary-yellow text-white hover:bg-primary-yellow/80"
            >
              Sign in
            </Button>
          </form>

          <div className="relative mx-auto flex w-full items-center justify-center text-xs text-primary-blue">
            <div className="h-[1px] w-11 bg-primary-blue/20"></div>
            <span className="mx-2">Or sign in with</span>
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

          <Separator />
          <div className="text-center text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="font-semibold text-primary-blue"
              prefetch={false}
            >
              Let&apos;s create one
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
