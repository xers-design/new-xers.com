'use client';

import Image from 'next/image';
import { useState } from 'react';
import { twMerge as twm } from 'tailwind-merge';
import FadeUp from '@/components/FadeUp';
import type { ProjectDetail, Platform } from '@/studio/types';

export default function SectionImages({ project }: { project: ProjectDetail }) {
  const [activePlatform, setActivePlatform] = useState<Platform>(project.platforms[0]);

  return (
    <section>
      <FadeUp>
        <div className="padding-global flex gap-4 sm:gap-20 mb-8 sm:mb-14 overflow-scroll hide-scrollbar">
          {project.platforms.map((platform, i) => (
            <button
              key={i}
              onClick={() => setActivePlatform(platform)}
              className={twm(
                'shrink-0 text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem] px-5 sm:px-8 py-2 sm:py-4 rounded-full',
                platform.name === activePlatform.name ? 'bg-xers-purple text-white' : 'bg-transparent text-[#C2C2C2]'
              )}
            >
              {platform.name}
            </button>
          ))}
        </div>
      </FadeUp>

      <div className="padding-global-2 hidden sm:block">
        <FadeUp>
          <div
            style={{ aspectRatio: `${activePlatform.imagesDesktop.aspectRatio}/1` }}
            className="relative inset-0 w-full rounded-2xl overflow-hidden"
          >
            <Image
              src={activePlatform.imagesDesktop.url}
              alt={activePlatform.imagesDesktop.caption}
              fill={true}
              placeholder="blur"
              blurDataURL={activePlatform.imagesDesktop.lqip}
            />
          </div>
        </FadeUp>
      </div>

      <div className="padding-global grid gap-4 sm:hidden">
        {activePlatform.imagesMobile.map((image, i) => (
          <FadeUp key={i}>
            <div
              style={{ aspectRatio: `${image.aspectRatio}/1` }}
              className="relative inset-0 w-full rounded-2xl overflow-hidden"
            >
              <Image src={image.url} alt={image.caption} fill={true} placeholder="blur" blurDataURL={image.lqip} />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
