import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex w-full items-center justify-center">
        <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="relative w-full overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]">
            <img
              alt="Hero Background"
              className="object-cover"
              src="/images/hero.png"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-primary-blue dark:text-gray-50 ">
              Casbah, Algeria
            </h1>
            <p className="max-w-md text-text-gray dark:text-text-gray ">
              The Casbah is a unique kind of medina, or Islamic city. It stands
              in one of the finest coastal sites on the Mediterranean,
              overlooking the islands where a Carthaginian trading-post was
              established in the 4th century BC. There are the remains of the
              citadel, old mosques and Ottoman-style palaces as well as the
              remains of a traditional urban structure associated with a
              deep-rooted sense of community.
            </p>
            <div className="flex space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-yellow px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Want to visit
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center bg-white px-6 py-2 text-sm font-medium text-primary-yellow shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Discover <ArrowRightIcon className="ml-3 font-bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
