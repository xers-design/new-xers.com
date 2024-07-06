'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, type Dispatch, type SetStateAction } from 'react';
import { useScreen } from 'usehooks-ts';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/studio/types';

type ProjectProps = {
  project: Project;
  index: number;
  setShowCursor: Dispatch<SetStateAction<boolean>>;
};

export default function Project(props: ProjectProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const isEven = (props.index + 1) % 2 === 0;
  const screen = useScreen();
  const isMobile = screen?.width <= 640;

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isEven ? [20, isMobile ? -23 : -20] : [-20, isMobile ? 23 : 20]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div
      ref={ref}
      style={{ transform: 'translate3d(0, 0, 0)' }}
      className="sticky top-0 sm:relative z-20 h-screen grid place-items-center pointer-events-none overflow-hidden"
    >
      <Link
        href={`/projects/${props.project.slug.current}`}
        className="pointer-events-auto"
      >
        <motion.div
          style={{ rotate }}
          className="w-[16.25rem] sm:w-[25rem] grid gap-2"
          onMouseEnter={() => props.setShowCursor(true)}
          onMouseLeave={() => props.setShowCursor(false)}
        >
          <div className="w-full aspect-square overflow-hidden rounded-xl relative">
            <motion.div style={{ scale }} className="absolute inset-0">
              <Image
                src={props.project.homeCardImage.url}
                alt={props.project.homeCardImage.caption}
                placeholder="blur"
                blurDataURL={props.project.homeCardImage.lqip}
                fill={true}
              />
            </motion.div>
          </div>

          <div className="grid gap-2 pl-6 pr-4 sm:pl-8 sm:pr-8 py-6 bg-xers-purple text-white rounded-xl">
            <div className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
              {props.project.name}
            </div>
            <div className="text-lg sm:text-2xl font-normal leading-[1.5]">
              {props.project.description}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
