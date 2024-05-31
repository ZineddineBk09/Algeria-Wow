import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { MobileNavbar } from "./mobile";

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
          <Link
            key={index}
            href={link.href}
            className="text-primary-blue before:bg-primary-yellow after:bg-primary-yellow relative inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all  ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          >
            {link.title}
          </Link>
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
          <Link
            key={index}
            href={link.href}
            className="text-primary-blue before:bg-primary-yellow after:bg-primary-yellow relative inline-flex h-9 items-center justify-center rounded-md px-4 text-sm transition-all  ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          >
            {link.title}
          </Link>
        ))}

        <Link
          className="text-primary-blue inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </Link>
      </nav>
      <div className="ml-auto">
        <Link
          className="text-primary-yellow border-primary-yellow inline-flex h-11 items-center justify-center rounded-xl border-2 bg-white px-8 py-1 text-sm font-medium hover:bg-gray-100  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Log in/Sign up
        </Link>
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
