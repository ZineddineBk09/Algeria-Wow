"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function PlacesCards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        navigation
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="relative h-full w-full !bg-transparent !shadow-none rotate-12"
          >
            <img
              src={`/images/place-img-1.png`}
              alt=""
              className="h-full w-full rounded-lg !bg-transparent"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
