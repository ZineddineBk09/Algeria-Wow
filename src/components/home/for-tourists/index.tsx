import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";

export default function ForTourists() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-10 rounded-3xl bg-gray-50 p-16 lg:flex-row lg:gap-16">
      {/* title and search */}
      <div className="flex w-full flex-col items-start justify-center space-y-4 px-4 lg:w-1/5 lg:space-y-12">
        <h2 className="text-4xl font-bold text-primary-blue lg:text-5xl">
          For <br /> <div className="text-primary-yellow">tourists?</div>
        </h2>
        <div>
          <p className="text-text-gray-light">
            All the information you need to know to travel to Algeria
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary-yellow px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          View all
        </Link>
      </div>

      {/* Places */}
      <div className="mr-auto flex w-full flex-col items-start justify-center space-y-12">
        <div className="md:grid-cols-2 lg:grid-cols-3 grid w-full grid-cols-1 items-center justify-start gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex max-w-sm flex-col items-start gap-y-4 rounded-lg bg-gray-100/50 p-6"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-yellow">
                  Car rental
                </h5>
              </a>
              <p className="mb-3 font-normal text-text-gray-light">
                Our service makes it easy for you to book your next Algeria car
                rental. We work with the best car rental companies in Algeria,
                bringing you discount car rental rates and a wide variety of car
                rental classes including econom....
              </p>
              <Link
                className="mt-16 inline-flex h-10 items-center justify-center px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1"
                href="#"
              >
                Discover <ArrowRightIcon className="ml-3 font-bold" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
