import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BestOffers() {
  return (
    <div className="relative flex w-[100vw] items-center justify-center h-[460px]">
      <Image
        alt="Hero Background"
        className="-z-10 h-fit w-full object-contain"
        src="/images/best-offers-bg.png"
        layout="fill"
      />

      <div className="flex flex-col items-center gap-y-10">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Not sure where to go?
        </h2>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary-yellow px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Discover our best offers
        </Link>
      </div>
    </div>
  );
}
