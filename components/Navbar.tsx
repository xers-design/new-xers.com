'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { twMerge as twm } from 'tailwind-merge';
import SocialIcons from '@/components/SocialIcons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const colorClasses = isOpen ? 'bg-white text-black' : 'bg-black text-white';

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const pathname = usePathname();
  const paths = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Works', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="absolute z-10 inset-0 top-8 bottom-auto w-full">
      <div className="padding-global flex items-center justify-between">
        <Link href="/">
          <div className="h-[2.88rem] sm:h-12 aspect-[2/1]  relative">
            <Image src="/xers.svg" alt="Xers Logo" fill={true} />
          </div>
        </Link>

        <button
          onClick={handleClick}
          className={`shrink-0 relative z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full ${colorClasses}`}
        >
          <div className="w-6 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="fixed inset-0 w-full h-full bg-[#03070C] bg-opacity-80">
            <div className="w-full sm:w-[58.2rem] overflow-hidden absolute inset-0 sm:inset-3 sm:left-auto bg-xers-blue sm:shadow sm:rounded-2xl">
              <img src="/images/menu-bg.svg" alt="" className="hidden sm:block absolute inset-0 w-full h-full" />
              <img src="/images/menu-bg-mobile.svg" alt="" className="sm:hidden absolute inset-0 w-full h-full" />

              <div className="h-[2.88rem] sm:h-12 aspect-[2/1] absolute top-[2.05rem] sm:top-[1.55rem] left-6 sm:left-10">
                <Image src="/xers-white.svg" alt="Xers Logo" fill={true} />
              </div>
              {/* <div className="bg-red-500 h-[1px] fixed z-50 w-full top-9 sm:top-8" />
              <div className="bg-red-500 h-[1px] fixed z-50 w-full top-[4.7rem] sm:top-[5.5rem]" /> */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="pt-[8.75rem] flex flex-col h-full">
                  {paths.map((path, i) => (
                    <Link key={i} onClick={handleClick} href={path.to}>
                      <div
                        className={twm(
                          'relative pt-1 sm:pt-[0.63rem] pb-[0.63rem] sm:pb-4 sm:pl-10 pl-6 overflow-hidden sm:rounded-tr-[0.25rem] sm:rounded-br-[0.25rem]',
                          pathname === path.to ? 'text-xers-blue' : 'text-white'
                        )}
                      >
                        <div
                          className={twm(
                            'absolute inset-0 right-auto  h-full bg-white',
                            pathname === path.to ? 'w-full' : 'w-0'
                          )}
                        />
                        <div className="relative text-[3.75rem] sm:text-[4.8rem] font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.23rem]">
                          {path.label}
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div className="mt-auto text-white pl-6 sm:pl-10 pb-8">
                    <SocialIcons />
                  </div>
                </div>

                <div className="hidden sm:grid place-items-center">
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
