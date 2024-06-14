'use client';

import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import FadeUp from '@/components/FadeUp';
import type { ProjectDetail } from '@/studio/types';

export default function SectionHero({ project }: { project: ProjectDetail }) {
  return (
    <section className="relative aspect-[0.75/1] sm:aspect-auto overflow-hidden text-white">
      <div className="hidden sm:block absolute inset-0 w-full h-full">
        <Image
          src={project.featuredImage.url}
          alt={project.featuredImage.caption}
          fill={true}
          placeholder="blur"
          blurDataURL={project.featuredImage.lqip}
        />
      </div>
      <div className="sm:hidden absolute inset-0 w-full h-full">
        <Image
          src={project.featuredImageMobile.url}
          alt={project.featuredImageMobile.caption}
          fill={true}
          placeholder="blur"
          blurDataURL={project.featuredImageMobile.lqip}
        />
      </div>

      <div className="padding-global relative pt-[6rem] sm:pt-[8.13rem] pb-14 sm:pb-[15.63rem] flex flex-col h-full sm:block">
        <FadeUp>
          <div
            style={{ aspectRatio: `${project.logo.aspectRatio}/1` }}
            className="relative w-[10.41rem] sm:w-[13.88rem]"
          >
            <Image
              src={project.logo.url}
              alt={project.logo.caption}
              fill={true}
              placeholder="blur"
              blurDataURL={project.logo.lqip}
            />
          </div>
        </FadeUp>
        <h1 className="mt-auto text-[4rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.16rem] sm:-tracking-[0.32rem] max-w-[35.31rem]">
          <AnimatedText>{project.slogan}</AnimatedText>
        </h1>
      </div>
    </section>
  );
}
