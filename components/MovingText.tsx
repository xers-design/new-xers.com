"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { twMerge as twm } from "tailwind-merge";
import FadeUp from "@/components/FadeUp";
import { useScreen } from "usehooks-ts";

import "swiper/css";
import "swiper/css/free-mode";

type MovingWord = {
  text: string;
  color: string;
  dot: boolean;
};

export default function MovingText({ words }: { words: MovingWord[] }) {
  const screen = useScreen();
  const isMobile = screen?.width <= 640;

  return (
    <section className="pointer-events-none sm:pointer-events-auto py-20 sm:py-[12.25rem]">
      <FadeUp>
        <Swiper
          slidesPerView="auto"
          spaceBetween={isMobile ? 12 : 20}
          freeMode={true}
          loop={true}
          speed={3000}
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          dir="rtl"
          className="flex items-center"
        >
          {words.map((word, i) => (
            <SwiperSlide
              key={i}
              className="relative py-3 !w-auto !flex !flex-row-reverse items-center gap-3 sm:gap-6"
            >
              <div
                className={twm(
                  "text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]",
                  word.color,
                )}
              >
                {word.text}
              </div>
              {word.dot && (
                <div className="w-3 sm:w-5 h-3 sm:h-5 bg-[#D9D9D9] rounded-full -mb-4 sm:-mb-7" />
              )}
            </SwiperSlide>
          ))}
          {words.map((word, i) => (
            <SwiperSlide
              key={i}
              className="relative py-3 !w-auto !flex items-center gap-3 sm:gap-6"
            >
              <div
                className={twm(
                  "text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]",
                  word.color,
                )}
              >
                {word.text}
              </div>
              {word.dot && (
                <div className="w-3 sm:w-5 h-3 sm:h-5 bg-[#D9D9D9] rounded-full -mb-4 sm:-mb-7" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeUp>
    </section>
  );
}
