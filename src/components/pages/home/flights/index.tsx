import {
  ArrowRightIcon,
  DotFilledIcon,
  MinusIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Flights() {
  return (
    <div className="pb-10 flex w-full flex-col items-center gap-y-20 md:pb-0">
      <h2 className="w-full text-center text-4xl font-bold text-primary-blue lg:text-5xl">
        Flights <span className="text-primary-yellow">to Algeria</span>
      </h2>

      <div className="flex w-full flex-col-reverse items-start md:flex-row">
        <div className="flex w-full flex-col items-start md:w-1/2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-x-4 rounded-lg bg-white p-4 text-lg font-bold ${
                index === 0 ? "text-primary-blue" : "text-text-gray"
              }`}
            >
              <span>Paris</span>
              <MinusIcon className="-mx-2" />
              <span>Algiers</span>{" "}
              <span className="flex text-text-gray-light">
                {Array.from({ length: 6 }).map((_, index) => (
                  <DotFilledIcon key={index} className="h-2 !text-xs" />
                ))}
              </span>
              <span className="text-sm text-primary-yellow">
                from 244 &#8364;
              </span>
            </div>
          ))}

          <div className="mt-6 flex space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-yellow px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Want to visit
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center bg-white px-6 py-2 text-sm font-medium text-primary-blue shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              Discover <ArrowRightIcon className="ml-3 font-bold" />
            </Link>
          </div>
        </div>

        <Image
          alt="Hero Background"
          className="rounded-lg object-cover"
          src="/images/paris-algiers.png"
          layout="cover"
          width={850}
          height={500}
        />
        <div></div>
      </div>
    </div>
  );
}
