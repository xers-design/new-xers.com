'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { twMerge as twm } from 'tailwind-merge';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function MovingText() {
  const words = [
    { text: 'Designing', color: 'text-xers-purple' },
    { text: 'revolutionary', color: 'text-black' },
    { text: 'products', color: 'text-xers-green' },
  ];
  return (
    <section>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
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
          <SwiperSlide key={i} className="relative pb-40 !w-auto">
            <div
              className={twm(
                'text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]',
                word.color
              )}
            >
              {word.text}
            </div>
          </SwiperSlide>
        ))}
        {words.map((word, i) => (
          <SwiperSlide key={i} className="relative pb-40 !w-auto">
            <div
              className={twm(
                'text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]',
                word.color
              )}
            >
              {word.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
