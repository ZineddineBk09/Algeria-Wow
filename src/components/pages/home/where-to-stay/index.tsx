"use client";

import { DotFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Badge } from "~/components/ui/badge";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CAROUSEL_ITEMS = 10;

export default function WhereToStay() {
  return (
    <section className="flex w-full items-start justify-between gap-x-16 rounded-3xl bg-gray-50 p-16">
      {/* title and search */}
      <div className="flex w-1/5 flex-col items-start justify-center space-y-12">
        <h2 className="text-5xl font-bold text-primary-blue">
          Where <br /> <div className="text-primary-yellow">to stay?</div>
        </h2>
        <div>
          <p className="text-text-gray-light">
            A mix of the charming, modern, and tried and true.
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
      <PlacesCarousel />
    </section>
  );
}

function PlacesCarousel() {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={3}
        rewind
        mousewheel
        direction="horizontal"
        modules={[Mousewheel]}
      >
        {Array.from({ length: CAROUSEL_ITEMS }).map((_, index) => (
          <SwiperSlide key={index}>
            <div>
              <a href="#" className="relative">
                <img
                  className="rounded-t-lg"
                  src="/images/place-img-2.png"
                  alt=""
                />
                <Badge
                  variant="outline"
                  className="absolute left-10 top-12 border-2 border-primary-yellow bg-white text-xs capitalize text-primary-yellow"
                >
                  Hotel
                </Badge>
              </a>
              <div className="mx-auto w-full px-5">
                <a href="#">
                  <h5 className="mb-2 font-semibold tracking-tight text-primary-blue">
                    Tipaza and Cherchell Tour by Fancyellow
                  </h5>
                </a>
                <p className="mb-3 flex w-full items-center text-xs font-normal text-text-gray-light">
                  <MapPinIcon className="-mr-[2px] h-4" /> Algiers{" "}
                  <DotFilledIcon className="mx-1" />{" "}
                  <StarIcon className="mr-1" /> 4.5 / 5
                </p>
                <p className="mb-3 flex w-full items-center gap-x-1 text-xs font-semibold text-primary-blue">
                  <span className="text-primary-yellow">
                    From{" "}
                    {new Number(1375).toLocaleString("en-US", {
                      style: "currency",
                      currency: "DZD",
                    })}
                  </span>
                  <span>/</span>
                  <span>night</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
