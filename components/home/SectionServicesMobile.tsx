'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { twMerge as twm } from 'tailwind-merge';
import { SPRING_IN } from '@/lib/animations/constants';
import type { Dispatch, SetStateAction } from 'react';
import type { HomePage, Service } from '@/studio/types';

export default function SectionServices({ homePage }: { homePage: HomePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentService, setCurrentService] = useState(homePage.services[0]);

  const totalServices = homePage.services.length;
  const currentIndex = homePage.services.findIndex((service) => service.title === currentService.title);
  const isAtFirstService = currentService.title === homePage.services[0].title;
  const isAtLastService = currentService.title === homePage.services[totalServices - 1].title;

  const move = (id: string) => {
    const offset = 40;
    const element = document.getElementById(id);
    const elementPosition = element!.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const moveService = (direction: 'prev' | 'next') => {
    let index = currentIndex;
    const indexToMove = direction === 'next' ? ++index : --index;
    const id = homePage.services[indexToMove].title;
    move(id);
  };

  const open = () => setIsOpen(true);
  const close = (id: string | null) => {
    setIsOpen(false);
    if (id) move(id);
  };

  // this is the whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-50%' }); // not works in Safari with multiple margin % option

  // this is the part when the middle text is clicked
  const bottomNavRefTwo = useRef(null);
  useOnClickOutside(bottomNavRefTwo, () => setIsOpen(false));

  return (
    <motion.section ref={sectionRef} className="relative sm:hidden">
      <div className="sticky top-0">
        <div className="pt-0 sm:pt-[7.5rem] relative">
          <div className="hidden sm:flex items-center gap-4 mb-6 px-6">
            <h2 className="text-2xl font-medium leading-[1.1] -tracking-[0.03rem]">Services</h2>
            <div className="relative w-[13.75rem] h-1 rounded-full bg-xers-cloudy-blue overflow-hidden">
              <motion.div className="absolute inset-0 right-auto w-full h-full bg-black origin-left" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="service-container relative flex flex-col items-start gap-12 w-full">
              {homePage.services.map((service, i) => (
                <Service key={i} service={service} setCurrentService={setCurrentService} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 h-[100dvh] pointer-events-none">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: isInView ? '0%' : '100%', opacity: isInView ? 1 : 0 }}
          transition={SPRING_IN}
          className="absolute inset-0 top-auto w-full bg-xers-blue text-white flex items-center justify-between pointer-events-auto"
        >
          <motion.button
            animate={{
              opacity: isAtFirstService ? 0 : 1,
              scale: isAtFirstService ? 0 : 1,
              pointerEvents: isAtFirstService ? 'none' : 'all',
            }}
            transition={SPRING_IN}
            onClick={() => moveService('prev')}
            className="px-4 py-[0.63rem]"
          >
            <div className="w-[1.75rem] aspect-square bg-white bg-opacity-15 grid place-items-center rounded-full">
              <div className="w-3 aspect-square">
                <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 12.5V1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 7L7 1.5L1.5 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          <button
            onClick={open}
            className="text-sm leading-[1.5] px-4 py-[0.63rem] flex gap-2 items-center justify-start overflow-hidden"
          >
            <div className="bg-white rounded-full text-xers-blue px-2">
              <span>{currentIndex + 1}</span>/<span>{totalServices}</span>
            </div>
            <div className="truncate">Specialized Design Systems</div>
          </button>

          <motion.button
            animate={{
              opacity: isAtLastService ? 0 : 1,
              scale: isAtLastService ? 0 : 1,
              pointerEvents: isAtLastService ? 'none' : 'all',
            }}
            transition={SPRING_IN}
            onClick={() => moveService('next')}
            className="px-4 py-[0.63rem]"
          >
            <div className="w-[1.75rem] aspect-square bg-white bg-opacity-15 grid place-items-center rounded-full">
              <div className="w-3 aspect-square">
                <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 1.5V12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 7L7 12.5L1.5 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          <motion.div
            ref={bottomNavRefTwo}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: isOpen ? '0%' : '100%', opacity: isOpen ? 1 : 0 }}
            transition={SPRING_IN}
            className="fixed inset-0 top-auto w-full bg-xers-blue py-8 flex flex-col items-start gap-6 rounded-tl-[0.63rem] rounded-tr-[0.63rem]"
          >
            {homePage.services.map((service, i) => (
              <button
                key={i}
                onClick={() => close(service.title)}
                className={twm(
                  'w-full text-left text-2xl font-medium leading-[1.1] -tracking-[0.03rem] gap-[0.63rem] truncate border-l-[0.38rem] px-4',
                  service.title === currentService.title ? 'border-white' : 'border-transparent opacity-50'
                )}
              >
                {service.title}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

type ServiceProps = {
  service: Service;
  setCurrentService: Dispatch<SetStateAction<Service>>;
};

function Service({ service, setCurrentService }: ServiceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0%' });

  useEffect(() => {
    if (isInView) {
      setCurrentService(service);
    }
  }, [isInView]);

  return (
    <div id={service.title} ref={ref} className="relative px-6 grow !min-w-full">
      <div className="">
        <h3 className="max-w-[20rem] sm:max-w-full text-[2.5rem] sm:text-7xl font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.18rem] mb-6">
          {service.title}
        </h3>
        <p className="text-lg sm:text-2xl font-normal leading-[1.5] max-w-[58.7rem] mb-8">{service.description}</p>
      </div>

      <div className="relative">
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
  );
}
