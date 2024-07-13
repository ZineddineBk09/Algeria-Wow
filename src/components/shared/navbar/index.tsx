import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { MobileNavbar } from "./mobile";
import { UnderlineLink } from "../components";
import AuthDialogs from "~/components/auth";

const Navbar = () => {
  const links = [
    {
      title: "What to do?",
      href: "#",
    },
    {
      title: "What to see?",
      href: "#",
    },
    {
      title: "Where to stay?",
      href: "#",
    },
    {
      title: "Where to eat?",
      href: "#",
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
      <div className="ml-auto">
        <AuthDialogs />
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
