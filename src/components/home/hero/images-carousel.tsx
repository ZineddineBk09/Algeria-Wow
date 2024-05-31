"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

/** className={`-ml-16 pl-2 md:basis-1/2 lg:basis-1/3 z-[${5 - index}] rotate-[${index * 10 - 10}deg] translate-y-[${index * -2}px] 
          //   `}
          // > */

function ImagesCarousel() {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className="flex w-[300px] items-center justify-between">
      <Button
        className="mr-2 h-10 w-10 rounded-full bg-gray-200 p-1 text-gray-500 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:text-gray-600 disabled:bg-gray-100 disabled:text-gray-300 disabled:hover:bg-gray-100 disabled:hover:text-gray-300"
        onClick={() => setSelected((prev) => (prev - 1) % 5)}
        disabled={selected === 0}
      >
        <ChevronLeftIcon />
      </Button>
      {/* create an arc like carousel of items */}
      {Array.from({ length: 5 }).map((_, index: number) => (
        <CarouselItem key={index} selected={selected} index={index} />
      ))}

      <Button
        className="ml-2 h-10 w-10 rounded-full bg-gray-200 p-1 text-gray-500 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:text-gray-600 disabled:bg-gray-100 disabled:text-gray-300 disabled:hover:bg-gray-100 disabled:hover:text-gray-300"
        onClick={() => setSelected((prev) => (prev + 1) % 5)}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

function CarouselItem({
  selected,
  index,
}: {
  selected: number;
  index: number;
}) {
  const rotate = index * 5 - 5;
  const zIndex = 5 - index;
  const transitionY = index * -2;

  return (
    <div
      key={index}
      className={`${
        selected === index ? "z-10" : "z-0"
      } -ml-20 pl-2 md:basis-1/2 lg:basis-1/3 z-[${zIndex}] rotate-[${rotate}deg] translate-y-[${0}px] h-8 w-12 rounded-lg border-2 border-black bg-white shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl disabled:pointer-events-none disabled:opacity-50`}
    ></div>
  );
}

export default ImagesCarousel;
