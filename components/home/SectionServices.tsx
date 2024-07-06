'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge as twm } from 'tailwind-merge';
import Badge from '@/components/Badge';
import AnimatedText from '@/components/AnimatedText';
import FadeUp from '@/components/FadeUp';
import type { HomePage, Service } from '@/studio/types';

import 'swiper/css';

export default function SectionServices({ homePage }: { homePage: HomePage }) {
  const servicesContainer = useRef(null);
  const slider = useRef<any>(null);
  const [showSlider, setShowSlider] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const slider = document.getElementById('services-slider');
      if (slider) {
        const { width, height } = slider.getBoundingClientRect();
        mouseX.set(e.clientX - width / 2);
        mouseY.set(e.clientY - height / 2);
      }
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    if (slider.current) {
      slider.current.swiper.slideTo(hoveredIndex);
    }
  }, [hoveredIndex]);

  const sliderImages = homePage.services.map((service) => service.desktopImage);

  return (
    <section className="hidden sm:block pt-[7.5rem]">
      <div className="padding-global relative flex items-start gap-16">
        <div className="sticky top-14">
          <h2 className="text-2xl font-medium leading-[1.1] -tracking-[0.03rem]">
            <AnimatedText>Services</AnimatedText>
          </h2>
          <div className="text-2xl font-normal leading-[1.1] -tracking-[0.03rem] mt-4 w-[15rem]">
            <AnimatedText className="pb-1">
              Dream to go digital? we will be there.
            </AnimatedText>
          </div>
          <FadeUp>
            <div className="w-[7.13rem] aspect-square mt-[5.65rem]">
              <Badge image="/images/badge-agency.svg" />
            </div>
          </FadeUp>
        </div>

        <motion.div
          ref={servicesContainer}
          onMouseEnter={() => setShowSlider(true)}
          onMouseLeave={() => setShowSlider(false)}
          className="relative divide-y divide-black divide-opacity-10 -mt-20"
        >
          {homePage.services.map((service, index) => (
            <motion.div key={index} onMouseEnter={() => setHoveredIndex(index)}>
              <Service
                service={service}
                index={index}
                hoveredIndex={hoveredIndex}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          id="services-slider"
          className="pointer-events-none fixed top-0 left-0"
          style={{ x: springX, y: springY }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: showSlider ? 1 : 0.5,
            opacity: showSlider ? 1 : 0,
          }}
        >
          <Swiper
            ref={slider}
            slidesPerView={1}
            direction="vertical"
            className="!w-[18.75rem] !aspect-[0.75/1]"
          >
            {sliderImages.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image
                    alt={image.caption}
                    src={image.url}
                    fill={true}
                    placeholder="blur"
                    blurDataURL={image.lqip}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

type ServiceProps = {
  service: Service;
  index: number;
  hoveredIndex: number;
};

function Service({ service, index, hoveredIndex }: ServiceProps) {
  return (
    <div className="py-16 flex gap-12">
      <div className="mt-2">
        <FadeUp>
          <div
            className={twm(
              'text-2xl leading-[1.5] transition',
              index === hoveredIndex && 'text-xers-blue'
            )}
          >
            (0{index + 1})
          </div>
        </FadeUp>
      </div>
      <div className="grid gap-8 w-full">
        <h3 className="text-5xl sm:text-7xl font-medium leading-[1.1] -tracking-[0.12rem] sm:-tracking-[0.18rem] w-full">
          <AnimatedText className="pb-2">{service.title}</AnimatedText>
        </h3>
        {service.scopes.length > 0 && (
          <FadeUp>
            <div
              className={twm(
                'flex items-center gap-5 transition',
                index === hoveredIndex ? 'opacity-100' : 'opacity-30'
              )}
            >
              {service.scopes.map((scope, i) => (
                <React.Fragment key={i}>
                  <div>{scope}</div>
                  {i !== service.scopes.length - 1 && (
                    <div className="hidden sm:block w-2 h-2 bg-[#D9D9D9] rounded-full -mb-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}
