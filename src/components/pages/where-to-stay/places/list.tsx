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

  // const filteredPlaces = useMemo(() => {
  //   return places.filter((place) => {
  //     const inBudget = place.price >= budget[0]! && place.price <= budget[1]!;

  //     const hasDeal =
  //       (!deals["Free cancellation"] ||
  //         place.facilities.includes("Free cancellation")) &&
  //       (!deals["Reserve now, pay at stay"] ||
  //         place.facilities.includes("Reserve now, pay at stay"));
  //     const hasRating =
  //       (!rating["5 stars"] || place.rating === 5) &&
  //       (!rating["4 stars"] || place.rating === 4) &&
  //       (!rating["3 stars"] || place.rating === 3);
  //     const hasType =
  //       (!type.Hotel || place.type === "Hotel") &&
  //       (!type.Apartment || place.type === "Apartment") &&
  //       (!type.Hostel || place.type === "Hostel") &&
  //       (!type.Room || place.type === "Room");
  //     const hasFacility =
  //       (!facilities.Parking || place.facilities.includes("Parking")) &&
  //       (!facilities.Restaurant || place.facilities.includes("Restaurant")) &&
  //       (!facilities["Pet Friendly"] ||
  //         place.facilities.includes("Pet Friendly")) &&
  //       (!facilities["Fitness Center"] ||
  //         place.facilities.includes("Fitness Center")) &&
  //       (!facilities["Non-smoking Room"] ||
  //         place.facilities.includes("Non-smoking Room")) &&
  //       (!facilities.Spa || place.facilities.includes("Spa")) &&
  //       (!facilities["Free WiFi"] || place.facilities.includes("Free WiFi")) &&
  //       (!facilities["Swimming Pool"] ||
  //         place.facilities.includes("Swimming Pool"));
  //     return inBudget && hasDeal && hasRating && hasType && hasFacility;
  //   });
  // }, [budget, deals, rating, type, facilities]);

  return (
    <>
      {places.map((place, index: number) => (
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
