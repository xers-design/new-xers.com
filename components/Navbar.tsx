'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { twMerge as twm } from 'tailwind-merge';
import SocialIcons from '@/components/SocialIcons';
import NavLink from '@/components/NavLink';
import { openSequence, closeSequence } from '@/lib/animations/navbar';
import { SPRING_IN } from '@/lib/animations/constants';
import { useSmoothScroll } from '@/components/SmoothScroll';
import type { General } from '@/studio/types';

export default function Navbar({ generalData }: { generalData: General }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const { startScroll, stopScroll } = useSmoothScroll();

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    isOpen ? stopScroll() : startScroll();
    animate(isOpen ? openSequence : closeSequence);
  }, [isOpen]);

  const paths = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Works', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header ref={scope} className="absolute z-10 inset-0 top-8 bottom-auto w-full">
      <div className="padding-global flex items-center justify-between">
        <Link href="/">
          <div className="h-[2.88rem] sm:h-12 aspect-[2/1]  relative">
            <Image src="/xers.svg" alt="Xers Logo" fill={true} priority={true} />
          </div>
        </Link>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9, transition: SPRING_IN }}
          className={twm(
            'shrink-0 relative z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full',
            isOpen ? 'bg-white text-black' : 'bg-black text-white'
          )}
        >
          <div className="w-6 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="menu_open-icon"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="w-6 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="menu_close-icon opacity-0"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, pointerEvents: 'none' }}
          className="menu fixed inset-0 w-full h-full bg-[#03070C] bg-opacity-80"
        >
          <div className="menu_container w-full sm:w-[58.2rem] overflow-hidden absolute inset-0 sm:inset-3 sm:left-auto bg-xers-blue sm:shadow sm:rounded-2xl origin-top-right">
            <img src="/images/menu-bg.svg" alt="" className="menu_bg hidden sm:block absolute inset-0 w-full h-full" />
            <img src="/images/menu-bg-mobile.svg" alt="" className="menu_bg sm:hidden absolute inset-0 w-full h-full" />

            <div className="menu_logo h-[2.88rem] sm:h-12 aspect-[2/1] absolute top-[2.05rem] sm:top-[1.55rem] left-6 sm:left-10">
              <Image src="/xers-white.svg" alt="Xers Logo" fill={true} />
            </div>
            {/* <div className="bg-red-500 h-[1px] fixed z-50 w-full top-9 sm:top-8" />
              <div className="bg-red-500 h-[1px] fixed z-50 w-full top-[4.7rem] sm:top-[5.5rem]" /> */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 h-full">
              <div className="pt-[8.75rem] flex flex-col h-full">
                {paths.map((path, i) => (
                  <NavLink key={i} handleClick={() => setIsOpen(!isOpen)} path={path} />
                ))}

                <div className="mt-auto text-white pl-6 sm:pl-10 pb-8">
                  <SocialIcons generalData={generalData} />
                </div>
              </div>

              <div className="hidden sm:grid place-items-center">
                <div className="flex flex-col items-start justify-center gap-9">
                  <div className="menu_image relative w-[12.2rem] aspect-[0.6/1] origin-left rounded-md overflow-hidden">
                    <Image
                      src={generalData.navbarImage.url}
                      alt={generalData.navbarImage.caption}
                      placeholder="blur"
                      blurDataURL={generalData.navbarImage.lqip}
                      fill={true}
                    />
                  </div>
                  <p className="menu_image-description text-white text-xl leading-[1.5] max-w-[21.13rem] origin-left">
                    Chasing dreams isn't a breeze, but when it's woven into our lives, the path smooths out. At Xers,
                    digital is our playground. We've mastered crafting experiences for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
