import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { twMerge as twm } from 'tailwind-merge';
import type { AboutPage, Bro } from '@/studio/types';

export default function SectionBros({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <section>
      <div className="padding-global">
        <div className="sm:px-[7rem] mt-16 sm:mt-[7.5rem] sm:flex justify-between">
          {aboutPage.bros.map((bro: Bro, index: number) => (
            <div
              key={index}
              className={twm('relative w-full max-w-[27rem]', (index + 1) % 2 === 0 && 'mt-20 sm:mt-[7.19rem]')}
            >
              <div
                style={{ aspectRatio: `${bro.image.aspectRatio}/1` }}
                className={`relative overflow-hidden w-full rounded-2xl`}
              >
                <Image fill={true} src={bro.image.url} alt={bro.name} placeholder="blur" blurDataURL={bro.image.lqip} />
              </div>
              <div
                className={twm(
                  'text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] -tracking-[0.03rem] px-4 py-[0.63rem]  rounded-full absolute  text-white',
                  (index + 1) % 2 === 0
                    ? 'bg-xers-green -top-4 -left-2 sm:-left-4 -rotate-[15.51deg]'
                    : 'bg-xers-purple -top-4 right-0 sm:-right-4 rotate-[15.51deg]'
                )}
              >
                {bro.pillShapeText}
              </div>
              <div className="text-[2.5rem] sm:text-[3.75rem] leading-[1.5] font-medium -tracking-[0.1rem] sm:-tracking-[0.15rem] mt-5 sm:mt-8 mb-2 sm:mb-0">
                {bro.name}
              </div>
              <div className="flex items-center justify-between mb-5 sm:mb-8 max-w-[25.75rem]">
                {bro.positions.map((position: string) => (
                  <div
                    key={position}
                    className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] leading-0 sm:-tracking-[0.03rem] opacity-50"
                  >
                    {position}
                  </div>
                ))}
              </div>
              <div className="text-lg sm:text-2xl leading-[1.5] tracking-0 sm:-tracking-[0.03rem]">
                <PortableText value={bro.bio} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
