'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useAnimate } from 'framer-motion';
import Badge from '@/components/Badge';
import { SPRING_OUT } from '@/lib/animations/constants';
import type { HomePage } from '@/studio/types';

export default function SectionServices({ homePage }: { homePage: HomePage }) {
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({ target: scope, offset: ['start start', 'end end'] });
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const servicesLength = homePage.services.length;
      const threshold = 1 / servicesLength;
      const newServiceIndex = Math.min(Math.floor(progress / threshold), servicesLength - 1);
      console.log({ serviceIndex, newServiceIndex });
      if (newServiceIndex !== serviceIndex) setServiceIndex(newServiceIndex);
    });

    return unsubscribe;
  }, [serviceIndex]);

  useEffect(() => {
    animate('.service-container', { x: `-${serviceIndex * 100}%` }, { ...SPRING_OUT, duration: 0.6 });
  }, [serviceIndex]);

  return (
    <motion.section ref={scope} style={{ height: `${homePage.services.length * 100 * 1.2}vh` }} className="relative">
      <div className="sticky top-0">
        <div className="pt-0 sm:pt-[7.5rem] relative">
          <div className="hidden sm:flex items-center gap-4 mb-6 px-14">
            <h2 className="text-2xl font-medium leading-[1.1] -tracking-[0.03rem]">Services</h2>
            <div className="relative w-[13.75rem] h-1 rounded-full bg-xers-cloudy-blue overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 right-auto w-full h-full bg-black origin-left"
              />
            </div>
          </div>

          <div className="overflow-hidden flex">
            <div className="service-container relative flex items-start w-full">
              {homePage.services.map((service, i) => (
                <div key={i} className="relative px-14 grow !min-w-full">
                  <div className="">
                    <h3 className="max-w-[20rem] sm:max-w-full text-[2.5rem] sm:text-7xl font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.18rem] mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg sm:text-2xl font-normal leading-[1.5] max-w-[58.7rem] mb-16">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative">
                    <div
                      style={{ aspectRatio: `${service.desktopImage.aspectRatio}/1` }}
                      className="hidden sm:block w-full relative overflow-hidden rounded-xl"
                    >
                      <Image
                        src={service.desktopImage.url}
                        alt={service.desktopImage.caption}
                        placeholder="blur"
                        blurDataURL={service.desktopImage.lqip}
                        fill={true}
                      />
                    </div>
                    <div
                      style={{ aspectRatio: `${service.mobileImage.aspectRatio}/1` }}
                      className="sm:hidden w-full relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={service.mobileImage.url}
                        alt={service.mobileImage.caption}
                        placeholder="blur"
                        blurDataURL={service.mobileImage.lqip}
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:block w-[7.13rem] aspect-square absolute -bottom-10 right-20 z-10">
          <Badge image="/images/badge-agency.svg" />
        </div>
      </div>
    </motion.section>
  );
}
