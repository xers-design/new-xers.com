'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Project from '@/components/home/Project';
import MovingText from '@/components/MovingText';
import Badge from '@/components/Badge';
import FadeUp from '@/components/FadeUp';
import type { HomePage } from '@/studio/types';

const words = [
  { text: 'Designing', color: 'text-xers-purple', dot: false },
  { text: 'revolutionary', color: 'text-black', dot: false },
  { text: 'products', color: 'text-xers-green', dot: false },
];

export default function SectionProjects({ homePage }: { homePage: HomePage }) {
  const [showCursor, setShowCursor] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const cursor = document.getElementById('project-cursor');
      if (cursor) {
        const { width, height } = cursor.getBoundingClientRect();
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

  return (
    <section className="relative h-[calc(300vh+32rem)] sm:mb-32">
      <div className="sticky top-24 h-screen">
        <FadeUp>
          <img
            src="/images/home-projects-bg.svg"
            className="hidden sm:block w-full aspect-[1.28/1] absolute left-0 right-0 top-0"
            alt=""
          />
          <img
            src="/images/home-projects-bg-mobile.svg"
            className="sm:hidden w-full aspect-[0.67/1] absolute left-0 right-0 top-0"
            alt=""
          />
        </FadeUp>
      </div>
      <div className="sticky z-10 top-14 overflow-hidden pb-2 -mt-[100vh]">
        <div className="padding-global flex items-end justify-center sm:justify-between">
          <FadeUp>
            <div className="w-20 sm:w-[14.25rem] aspect-square">
              <Badge image="/images/badge-agency.svg" />
            </div>
          </FadeUp>
          <FadeUp>
            <Link href="/projects" className="hidden sm:block">
              <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem] hover:bg-xers-blue text-xers-blue hover:text-white border border-xers-blue rounded-full px-8 py-6 mb-4 transition">
                View All Projects
              </div>
            </Link>
          </FadeUp>
        </div>
        <div className="mt-14 sm:-mt-[8rem]">
          <MovingText words={words} />
        </div>
      </div>

      {homePage.projects.map((project, i) => (
        <Project
          key={i}
          project={project}
          index={i}
          setShowCursor={setShowCursor}
        />
      ))}

      <motion.div
        id="project-cursor"
        className="fixed z-50 top-0 left-0 w-[9.38rem] aspect-square rounded-full bg-white grid place-items-center pointer-events-none"
        style={{ x: springX, y: springY }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: showCursor ? 1 : 0.5,
          opacity: showCursor ? 1 : 0,
        }}
      >
        <div className="text-lg text-xers-blue">View</div>
      </motion.div>
    </section>
  );
}
