import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="flex w-full items-center justify-center">
        <div className=" grid  w-full grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-3 lg:gap-4">
          {/* Hero Image */}
          <div className="relative col-span-1 w-full overflow-hidden lg:col-span-2">
            <Image
              alt="Hero Background"
              className="rounded-lg object-cover"
              src="/images/hero.png"
              layout="cover"
              width={850}
              height={600}
            />
          </div>

          {/* Hero Text */}
          <div className="mx-auto w-full space-y-4 lg:w-10/12">
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
            <ImagesCarousel />
          </div>
        </div>
      </section>
    </>
  );
}

export function ImagesCarousel() {
  return (
    <Carousel className="ml-10 lg:w-[250px]">
      <CarouselContent className="-ml-16">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            // z index is used to make sure each item is on top of the next one
            // rotating the carousel
            // 4 images with rotations: -20, 0, 20, 40
            // and to give a look of a 3D carousel, we are using shadow to give a depth effect
            // also we are using basis to make sure the carousel items are taking the same width
            // also give an arc look with translate-y
            className={`-ml-16 pl-2 md:basis-1/2 lg:basis-1/3 z-[${5 - index}] rotate-[${index * 10 - 10}deg] translate-y-[${index * -2}px] 
            `}
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
