import { ClockIcon, DotFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { Badge } from "~/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const CAROUSEL_ITEMS = 3;

export default function WhatToDo() {
  const basis =
    CAROUSEL_ITEMS > 6 ? Number((100 / CAROUSEL_ITEMS).toFixed(0)) * 2 : 33.33;

  return (
    <section className="relative flex w-full flex-col items-start justify-between gap-10 rounded-3xl  bg-gray-50 p-16 lg:flex-row lg:gap-12">
      {/* title and search */}
      <div className="flex w-full min-w-[200px] flex-col items-start justify-center space-y-4 px-4 lg:w-1/5 lg:space-y-12">
        <h2 className="text-4xl font-bold text-primary-blue lg:text-5xl">
          What <br /> <div className="text-primary-yellow">to do?</div>
        </h2>
        <div>
          <p className="text-text-gray-light">
            Relaxing, interesting, exciting – a pastime for all tastes.
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
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
          inViewThreshold: 0.5,
          align: "start",
        }}
      >
        <div className="absolute -left-52 bottom-4 z-10 ml-4 flex items-center gap-x-4">
          <CarouselNext />
          <CarouselPrevious />
        </div>

        <CarouselContent>
          {Array.from({ length: CAROUSEL_ITEMS }).map((_, index) => (
            <CarouselItem key={index} className={`lg:basis-[${basis}%]`}>
              <div className="w-full">
                <a href="#" className="relative">
                  <img
                    className="rounded-t-lg "
                    src="/images/place-img-1.png"
                    alt=""
                  />
                  <Badge
                    variant="outline"
                    className="absolute left-6 top-6 border-2 border-primary-yellow bg-white text-xs capitalize text-primary-yellow"
                  >
                    Master-Class
                  </Badge>
                </a>
                <div className="mx-auto w-full px-5">
                  <a href="#">
                    <h5 className="mb-2 font-semibold tracking-tight text-primary-blue">
                      Tipaza and Cherchell Tour by Fancyellow
                    </h5>
                  </a>
                  <p className="mb-3 flex w-full items-center text-xs font-normal text-text-gray-light">
                    <ClockIcon className="mr-1" /> 7 hours{" "}
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
                    <span>ticket</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
