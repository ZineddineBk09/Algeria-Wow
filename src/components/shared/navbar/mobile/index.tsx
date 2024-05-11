"use client";

import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import Logo from "../../logo";
import Link from "next/link";

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

export function MobileNavbar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <TextAlignRightIcon className="ml-8 h-8 w-8 cursor-pointer text-xl text-text-gray-dark" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[350px]">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <SheetDescription className="">
            <nav className="flex flex-col gap-4 mt-12">
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="h-8 text-primary-blue">
                  {link.title}
                </Link>
              ))}
            </nav>
          </SheetDescription>
          <SheetFooter>
            {/* <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <Input
              id="search"
              type="search"
              placeholder="Search"
              className="w-full"
            />
            <Button className="w-full mt-4">Search</Button> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
