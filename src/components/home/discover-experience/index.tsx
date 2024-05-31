import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";

export default function DiscoverExperience() {
  const badges = [
    "Algiers",
    "Hotels in Algiers",
    "walking Tours",
    "Algeria Transfer",
    "Car Sharing",
    "Casbah Tour",
    "Mostaganem",
    "Bus Tours",
    "Algeria",
    "Algeria Tours",
    "Algeria Hotels",
    "Algeria Transfers",
  ];

  return (
    <section className="flex w-full items-start justify-between gap-x-16 rounded-3xl bg-gray-50 p-16">
      {/* title and search */}
      <div className="flex w-1/2 flex-col items-start justify-center space-y-12">
        <h2 className="text-5xl font-bold text-primary-blue">
          Discover <br /> <div className="text-primary-yellow">experience</div>
        </h2>
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-2 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow ">
          <MagnifyingGlassIcon className="w-8 h-8 text-primary-yellow" />
          <Input
            className="h-12 flex-1 border-none bg-transparent px-4 text-sm font-medium text-primary-blue placeholder-primary-yellow outline-none focus:outline-none focus-visible:outline-none dark:bg-transparent"
            placeholder="Search"
          />
          <button className="h-12 rounded-md bg-primary-yellow px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow">
            Search
          </button>
        </div>
      </div>

      {/* title and badges */}
      <div className="mr-auto flex w-1/3 flex-col items-start justify-center space-y-12">
        <h2 className="text-3xl font-bold text-primary-blue dark:text-gray-50">
          Popular search
        </h2>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xl capitalize text-gray-500"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
