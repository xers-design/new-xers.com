'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import FadeUp from '@/components/FadeUp';
import type { HomePage } from '@/studio/types';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function SectionLogos({ homePage }: { homePage: HomePage }) {
  return (
    <section id="logos">
      <FadeUp>
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
          {homePage.logos.map((logo, i) => (
            <SwiperSlide key={i} className="relative !w-[9rem] sm:!w-[18.75rem] aspect-[2/1]">
              <Image src={logo.url} alt={logo.caption} placeholder="blur" blurDataURL={logo.lqip} fill={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeUp>
    </section>
  );
}
