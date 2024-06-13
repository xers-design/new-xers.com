'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useScreen } from 'usehooks-ts';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/studio/types';

export default function Project({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const isEven = (index + 1) % 2 === 0;
  const screen = useScreen();
  const isMobile = screen?.width <= 640;
  const rotate = useTransform(scrollYProgress, [0, 1], isEven ? [20, isMobile ? -23 : -20] : [-20, isMobile ? 23 : 20]);

  return (
    <div
      ref={ref}
      style={{ transform: 'translate3d(0, 0, 0)' }}
      className="sticky top-0 sm:relative z-20 h-screen grid place-items-center pointer-events-none overflow-hidden"
    >
      <Link href={`/projects/${project.slug.current}`} className="pointer-events-auto">
        <motion.div style={{ rotate }} className="w-[16.25rem] sm:w-[25rem] grid gap-2">
          <div className="w-full aspect-square overflow-hidden rounded-xl relative">
            <Image
              src={project.homeCardImage.url}
              alt={project.homeCardImage.caption}
              placeholder="blur"
              blurDataURL={project.homeCardImage.lqip}
              fill={true}
            />
          </div>
          <div className="grid gap-2 pl-6 pr-4 sm:pl-8 sm:pr-8 py-6 bg-xers-purple text-white rounded-xl">
            <div className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
              {project.name}
            </div>
            <div className="text-lg sm:text-2xl font-normal leading-[1.5]">{project.description}</div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
