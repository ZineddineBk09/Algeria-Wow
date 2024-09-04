"use client";

import { ExitIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { MobileNavbar } from "./mobile";
import { UnderlineLink } from "../components";
import AuthDialogs from "~/components/auth";
import { signOut, useSession } from "next-auth/react";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

const Navbar = () => {
  const { data: session } = useSession();
  const links = [
    {
      title: "What to do?",
      href: "/what-to-do",
    },
    {
      title: "What to see?",
      href: "/what-to-see",
    },
    {
      title: "Where to stay?",
      href: "/where-to-stay",
    },
    {
      title: "Where to eat?",
      href: "/where-to-eat",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between bg-white p-4 md:p-6 ">
      <Logo />
      <nav className="mx-auto hidden items-center gap-4 lg:flex">
        {links.map((link, index) => (
          <UnderlineLink
            key={index}
            href={link.href}
            textColor="blue"
            textWeight="medium"
            underlineColor="yellow"
          >
            {link.title}
          </UnderlineLink>
        ))}

        {[
          {
            title: "Flight tickets",
            href: "#",
          },
          {
            title: "For tourists",
            href: "#",
          },
        ].map((link, index) => (
          <UnderlineLink
            key={index}
            href={link.href}
            textColor="blue"
            textWeight="base"
            underlineColor="yellow"
          >
            {link.title}
          </UnderlineLink>
        ))}

        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-primary-blue transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </Link>
      </nav>
      <section className="ml-auto">
        {session?.user ? <UserCard /> : <AuthDialogs />}
      </section>
      <MobileNavbar />
    </header>
  );
};

export function UserCard() {
  const { data: session } = useSession();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage src={session?.user.image ?? ""} />
          <AvatarFallback>
            {session?.user.name
              ?.split(" ")
              .map((name) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-60">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={session?.user.image ?? ""} />
            <AvatarFallback>
              {session?.user.name
                ?.split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{session?.user.name}</h4>

            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined{", "}
                {new Date(
                  new Date(session?.expires ?? "").getTime() -
                    30 * 24 * 60 * 60 * 1000,
                ).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
              </span>
            </div>

            <Button
              className="-ml-4 flex items-center text-red-500 hover:bg-transparent hover:text-red-700"
              onClick={() => signOut()}
              variant="ghost"
            >
              <ExitIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs">Sign out</span>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Navbar;
