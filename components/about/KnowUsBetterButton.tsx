'use client';

import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';

export default function TakeARideButton() {
  const [scope, animate] = useAnimate();

  const move = (id: string) => {
    const offset = 40;
    const element = document.getElementById(id);
    const elementPosition =
      element!.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    animate(
      [
        ['.dots', { opacity: 1 }, { duration: 0.2 }],
        ['.dot:nth-of-type(1)', { opacity: 0.06 }],
        ['.dot:nth-of-type(2)', { opacity: 0.3 }, { at: '-0.1' }],
        ['.dot:nth-of-type(3)', { opacity: 1 }, { at: '-0.1' }],
        ['.dots', { opacity: 0 }, { duration: 0.2 }],
      ],
      { repeat: Infinity, duration: 2 }
    );
  }, []);

  return (
    <button onClick={() => move('bros')} className="group">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-4 text-xers-blue">
        <div className="text-lg sm:text-2xl font-normal sm:font-medium ml-4 -tracking-0 sm:-tracking-[0.03rem]">
          Know us better
        </div>
        <div className="relative w-20 aspect-square grid place-items-center border border-xers-blue rounded-full group-hover:bg-xers-blue group-hover:text-white transition">
          <div
            ref={scope}
            className="absolute -top-8 left-1/2 -translate-x-1/2"
          >
            <div className="dots flex flex-col gap-[0.3125rem]">
              <div className="dot w-1 h-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-0" />
              <div className="dot w-1 h-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-0" />
              <div className="dot w-1 h-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-0" />
            </div>
          </div>

          <img
            src="/images/button-bg.svg"
            alt=""
            className="absolute inset-0 scale-[2] translate-x-10 group-hover:translate-x-5 translate-y-20 group-hover:translate-y-8 rotate-[12deg] group-hover:rotate-[0deg] transition duration-300"
          />

          <div className="w-6 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-xers-blue group-hover:translate-y-[100%] group-hover:opacity-0 duration-300 transition">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12L12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-6 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200%] group-hover:text-white group-hover:-translate-y-[50%] opacity-0 group-hover:opacity-100 duration-300 transition">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12L12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}
