import { DotFilledIcon, MinusIcon, StarIcon } from "@radix-ui/react-icons";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Badge } from "~/components/ui/badge";

export default function WhereToEat() {
  return (
    <section className="flex w-full items-start justify-between gap-x-16 rounded-3xl bg-gray-50 p-16">
      {/* title and search */}
      <div className="flex w-1/5 flex-col items-start justify-center space-y-12">
        <h2 className="text-5xl font-bold text-primary-blue">
          Where <br /> <div className="text-primary-yellow">to eat?</div>
        </h2>
        <div>
          <p className="text-text-gray-light">
            Can&apos;t-miss spots to dine, drink, and feast on best cuisines.
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
        <div className="grid w-full grid-cols-3 items-center justify-start gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-full">
              <a href="#" className="relative">
                <img
                  className="rounded-t-lg"
                  src="/images/place-img-3.png"
                  alt=""
                />
                <Badge
                  variant="outline"
                  className="absolute left-6 top-6 border-2 border-primary-yellow bg-white text-xs capitalize text-primary-yellow"
                >
                  Restaurant
                </Badge>
              </a>
              <div className="mx-auto w-full px-5">
                <a href="#">
                  <h5 className="mb-2 font-semibold tracking-tight text-primary-blue">
                    L&apos;hipponois
                  </h5>
                </a>
                <p className="mb-3 flex w-full items-center text-xs font-normal text-text-gray-light">
                  <MapPinIcon className="-mr-[2px] h-4" /> Annaba{" "}
                  <DotFilledIcon className="mx-1" />{" "}
                  <StarIcon className="mr-1" /> 4.5 / 5
                </p>
                <p className="mb-3 flex w-full items-center gap-x-1 text-xs font-semibold text-primary-blue">
                  <span>Price range:</span>
                  <span className="text-primary-yellow">
                    {new Number(600).toLocaleString("en-US", {
                      style: "currency",
                      currency: "DZD",
                    })}
                  </span>
                  <span className="text-primary-yellow">
                    <MinusIcon />
                  </span>
                  <span className="text-primary-yellow">
                    {new Number(1200).toLocaleString("en-US", {
                      style: "currency",
                      currency: "DZD",
                    })}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
