"use client";

import { CheckIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";
import Rating from "~/components/shared/rating";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { usePlacesContext } from "~/context/places";
import { diplayLargeNumber } from "~/utils";

const PlacesList = () => {
  const {
    places,
    setPlaces,
    budget,
    deletePlaces,
    rating,
    deals,
    type,
    facilities,
    filteredPlaces,
  } = usePlacesContext();

  return (
    <>
      {filteredPlaces.map((place, index: number) => (
        <div
          key={index}
          className="flex w-full items-center gap-3 rounded-lg bg-background"
        >
          <img
            src="/images/place-img-1.png"
            alt=""
            className="h-64 w-[60%] rounded-lg"
          />
          <div className="flex w-full flex-col gap-4">
            <div>
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-bold text-primary-blue">
                  {place.name}
                </h3>

                {/* Rating */}
                {
                  <div className="flex items-center gap-1">
                    <Rating rating={place.rating} size="sm" />
                    <span className="ml-3 text-sm font-semibold text-text-gray-light">
                      {`${place.rating} / 5`}
                    </span>
                  </div>
                }
              </div>
              <div className="my-2 flex w-full items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-text-gray-light">
                  <MapPinIcon className="h-4 w-4" />
                  <Link href="#" className="underline" prefetch={false}>
                    {place.address}
                  </Link>
                </div>

                {/* Reviews */}
                <span className="text-sm text-primary-blue underline">
                  {diplayLargeNumber(place.reviews)} reviews
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span className="text-primary-blue">Free cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <span className="text-primary-blue">
                  Reserve now, pay at stay
                </span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="text-primary-yellow">
                From {place.price} DZD{" "}
                <span className="text-primary-blue">/ night</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-fit items-center justify-center rounded-xl border-2 border-primary-yellow bg-white px-8 py-1 text-sm font-medium text-primary text-primary-yellow hover:bg-gray-100  hover:text-primary-yellow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
              >
                Check availability
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlacesList;
