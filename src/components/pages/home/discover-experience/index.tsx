"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";

export default function DiscoverExperience() {
  const [search, setSearch] = React.useState("");

  const badges = [
    "Algiers",
    "Hotels in Algiers",
    "walking Tours",
    "Algeria Transfer",
    "Car Sharing",
    "Casbah Tour",
    "Mostaganem",
    "Bus Tours",
  ];

  const handleSearch = () => {
    console.log("search: ", search);
  };

  const handleBadgeClick = (badge: string) => {
    setSearch(badge);
  };

  return (
    <section className="flex w-full flex-col items-start justify-between gap-10 rounded-3xl bg-gray-50 p-16 lg:flex-row lg:gap-16">
      {/* title and search */}
      <div className="flex w-full flex-col items-start justify-center space-y-8 lg:w-3/5 lg:space-y-12">
        <h2 className="text-4xl font-bold text-primary-blue md:text-5xl">
          Discover <br /> <div className="text-primary-yellow">experience</div>
        </h2>
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-1 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow md:p-2 ">
          <MagnifyingGlassIcon className="h-8 w-8 text-primary-yellow" />
          <input
            className="h-11 flex-1 border-none bg-transparent px-4 text-sm font-medium text-primary-blue placeholder-gray-500 !outline-none focus:!border-none focus:!outline-none focus-visible:!outline-none dark:bg-transparent lg:h-12"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="h-11 rounded-md bg-primary-yellow px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow lg:h-12"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* title and badges */}
      <div className="mr-auto flex w-full flex-col items-start justify-center space-y-8 lg:w-2/5 lg:space-y-12">
        <h2 className="text-2xl font-bold text-primary-blue dark:text-gray-50 md:text-3xl">
          Popular search
        </h2>
        <div className="flex w-full flex-wrap items-center justify-start gap-3">
          {badges.map((badge, index) => (
            <button key={index} onClick={() => handleBadgeClick(badge)}>
              <Badge
                variant="outline"
                className="text-base capitalize text-gray-500 lg:text-lg"
              >
                {badge}
              </Badge>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
