"use client";

import Image from "next/image";
import { useState, useEffect, useRef, use } from "react";
import Player from "next-video/player";
import { useOnClickOutside } from "usehooks-ts";
import AnimatedText from "@/components/AnimatedText";
import FadeUp from "@/components/FadeUp";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { SPRING_IN, SPRING_OUT } from "@/lib/animations/constants";
import type { Video } from "@/studio/types";

const overlayAnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: SPRING_IN },
  exit: { opacity: 0, transition: SPRING_OUT },
};

const videoAnimationProps = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: SPRING_IN },
  exit: { scale: 0.8, opacity: 0, transition: SPRING_OUT },
};

export default function Video({ video }: { video: Video }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { startScroll, stopScroll } = useSmoothScroll();

  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    isOpen ? stopScroll() : startScroll();
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <FadeUp>
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl"
        >
          <div className="w-full h-full relative">
            <Image
              src={video.thumbnail.url}
              alt={video.caption}
              fill={true}
              placeholder="blur"
              blurDataURL={video.thumbnail.lqip}
            />
          </div>

          <div className="w-10 sm:w-20 aspect-square text-xers-blue absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <FadeUp>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_1_2932)">
                  <rect width="80" height="80" rx="40" fill="currentColor" />
                  <path
                    d="M35.0156 30.9922L49.0156 39.9922L35.0156 48.9922V30.9922Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1_2932"
                    x="-8"
                    y="-8"
                    width="96"
                    height="96"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1_2932"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1_2932"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </FadeUp>
          </div>

          {video.caption && (
            <>
              <div className="absolute inset-0 top-auto h-[4.5rem] sm:h-[18.45rem] bg-gradient-to-t from-xers-blue to-transparent" />
              <h2 className="absolute bottom-4 sm:bottom-14 left-1/2 -translate-x-1/2 text-xl sm:text-[5.25rem] font-medium leading-[1.1] -tracking-[0.05rem] sm:-tracking-[0.21rem] text-white text-center w-full">
                <AnimatedText>{video.caption}</AnimatedText>
              </h2>
            </>
          )}
        </button>
      </FadeUp>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...overlayAnimationProps}
            role="button"
            className="fixed z-20 inset-0 bg-[#03070C] bg-opacity-80 grid place-items-center"
          >
            <motion.div
              ref={ref}
              {...videoAnimationProps}
              className="relative w-[90%] sm:w-1/2 rounded-2xl overflow-hidden"
            >
              <Player
                autoPlay="any"
                src={video.url}
                poster={video.thumbnail.url}
                blurDataURL={video.thumbnail.lqip}
                primaryColor="#3E8DFF"
                metadataVideoTitle={video.caption}
                accentColor="rgba(62, 141, 255, 0.25)"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
