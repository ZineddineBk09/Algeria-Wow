import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface Props {
  text: React.ReactNode;
  actionText: string;
}

export default function AdBanner({ text, actionText }: Props) {
  return (
    <section className="relative mx-auto flex h-40 w-full items-center overflow-hidden bg-gray-50 p-4">
      <Image
        alt="Hero Background"
        className="object-cover"
        src="/images/ad-banner.png"
        layout="fill"
      />
      {/* incline on right */}
      <div
        className="absolute -left-32 top-0 z-0 h-[500px] lg:w-[1000px] md:w-[600px] w-[500px]
      rotate-[30deg] bg-primary-green"
      ></div>

      <div className="z-10 max-w-md space-y-4 text-lg md:text-xl font-bold text-white">
        <div>{text}</div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary-yellow px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          {actionText}
        </Link>
      </div>
    </section>
  );
}
