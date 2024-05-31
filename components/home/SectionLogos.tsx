'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function SectionLogos() {
  return (
    <section>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        loop={true}
        speed={2000}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        dir="rtl"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="relative !w-[9rem] sm:!w-[18.75rem] aspect-[2/1]">
            <Image src="/images/flow.png" alt="Flow Music App" fill={true} sizes="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
