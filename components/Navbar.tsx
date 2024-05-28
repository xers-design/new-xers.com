'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SocialIcons from '@/components/SocialIcons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const colorClasses = isOpen ? 'bg-white text-black' : 'bg-black text-white';

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <header className="absolute z-10 inset-0 top-8 bottom-auto w-full">
      <div className="padding-global flex justify-between">
        <Link href="/">
          <div className="h-12 aspect-[2/1]  relative">
            <Image src="/xers.svg" alt="Xers Logo" fill={true} />
          </div>
        </Link>

        <button
          onClick={handleClick}
          className={`relative z-10 grid place-items-center w-14 aspect-square rounded-full ${colorClasses}`}
        >
          <div className="w-6 aspect-square">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="fixed inset-0 w-full h-full bg-[#03070C] bg-opacity-80">
            <div className="w-[58.2rem] overflow-hidden absolute inset-3 left-auto bg-xers-blue shadow rounded-2xl">
              <img src="/images/menu-bg.svg" alt="" className="absolute inset-0 w-full h-full" />

              <div className="h-12 aspect-[2/1] absolute top-5 left-10">
                <Image src="/xers-white.svg" alt="Xers Logo" fill={true} />
              </div>
              {/* <div className="bg-red-500 h-1 fixed z-50 w-full top-7" />
              <div className="bg-red-500 h-1 fixed z-50 w-full top-20" /> */}
              <div className="relative grid grid-cols-2 h-full">
                <div className="pt-[8.75rem] flex flex-col h-full">
                  <Link onClick={handleClick} href="/">
                    <div className="relative text-xers-blue pt-[0.63rem] pb-4 pl-10 overflow-hidden rounded-tr-[0.25rem] rounded-br-[0.25rem]">
                      <div className="absolute inset-0 right-auto w-full h-full bg-white" />
                      <div className="relative text-[4.8rem] font-medium leading-[1.1] -tracking-[0.23rem]">Home</div>
                    </div>
                  </Link>
                  <Link onClick={handleClick} href="/about">
                    <div className="relative text-white pt-[0.63rem] pb-4 pl-10 overflow-hidden rounded-tr-[0.25rem] rounded-br-[0.25rem]">
                      <div className="absolute inset-0 right-auto w-0 h-full bg-white" />
                      <div className="relative text-[4.8rem] font-medium leading-[1.1] -tracking-[0.23rem]">About</div>
                    </div>
                  </Link>
                  <Link onClick={handleClick} href="/projects">
                    <div className="relative text-white pt-[0.63rem] pb-4 pl-10 overflow-hidden rounded-tr-[0.25rem] rounded-br-[0.25rem]">
                      <div className="absolute inset-0 right-auto w-0 h-full bg-white" />
                      <div className="relative text-[4.8rem] font-medium leading-[1.1] -tracking-[0.23rem]">Work</div>
                    </div>
                  </Link>
                  <Link onClick={handleClick} href="/contact">
                    <div className="relative text-white pt-[0.63rem] pb-4 pl-10 overflow-hidden rounded-tr-[0.25rem] rounded-br-[0.25rem]">
                      <div className="absolute inset-0 right-auto w-0 h-full bg-white" />
                      <div className="relative text-[4.8rem] font-medium leading-[1.1] -tracking-[0.23rem]">
                        Contact
                      </div>
                    </div>
                  </Link>

                  <div className="mt-auto text-white pl-10 pb-8">
                    <SocialIcons />
                  </div>
                </div>

                <div className="grid place-items-center">
                  <div className="flex flex-col items-start justify-center gap-9">
                    <div className="relative w-[12.2rem] aspect-[0.6/1]">
                      <Image src="/images/menu-photos.png" alt="Xers" fill={true} />
                    </div>
                    <p className="text-white text-xl leading-[1.5] max-w-[21.13rem]">
                      Chasing dreams isn't a breeze, but when it's woven into our lives, the path smooths out. At Xers,
                      digital is our playground. We've mastered crafting experiences for users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
