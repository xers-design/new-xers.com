'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { ProjectDetail } from '@/studio/types';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function SectionTestimonials({ project }: { project: ProjectDetail }) {
  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'bullet-active',
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">-0' + (index + 1) + '</span>';
    },
  };

  if (!project.testimonials) return;

  return (
    <section>
      <div className="padding-global pb-16 sm:pb-[8.5rem]">
        <div className="flex flex-col sm:flex-row items-start justify-end">
          <div className="mr-auto mb-10 sm:mb-0">
            <h2 className="text-2xl sm:text-2xl font-medium leading-[1.1] -tracking-[0.06rem]">Testimonial</h2>
            <div className="swiper-pagination !relative mt-4 sm:mt-10 flex sm:flex-col items-start gap-8"></div>
          </div>

          <Swiper
            effect="fade"
            rewind={true}
            autoHeight={true}
            pagination={pagination}
            slidesPerView={1}
            grabCursor={true}
            modules={[Pagination, EffectFade]}
            className="!w-full sm:!w-[55.88rem] shrink-0 !overflow-visible !mr-0"
          >
            {project.testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="grid gap-10 sm:gap-16 bg-white">
                  <div className="relative">
                    <div className="hidden sm:block text-[6rem] font-medium leading-[1.5] sm:leading-[1.3] -tracking-[0.11rem] absolute -top-[0.9rem] -left-16">
                      “
                    </div>
                    <div className="text-2xl sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.06rem] sm:-tracking-[0.11rem]">
                      {testimonial.quote}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="shrink-0 relative w-12 sm:w-16 aspect-square overflow-hidden rounded-full [&_img]:object-cover">
                      <Image
                        src={testimonial.image.url}
                        alt={testimonial.image.caption}
                        placeholder="blur"
                        blurDataURL={testimonial.image.lqip}
                        fill={true}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="text-xl sm:text-2xl font-medium leading-[1.1] -tracking-[0.05rem] sm:-tracking-[0.06rem]">
                        {testimonial.name}
                      </div>
                      <div className="text-base sm:text-2xl font-normal leading-[1.3] -tracking-[0.02rem] sm:-tracking-[0.06rem]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
