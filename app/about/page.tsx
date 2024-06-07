import Link from 'next/link';
import Image from 'next/image';
import { sanityClient } from '@/studio/lib/client';
import { aboutPageQuery } from '@/studio/queries';
import SectionBros from '@/components/about/SectionBros';
import SectionMovingText from '@/components/about/SectionMovingText';
import SectionVision from '@/components/about/SectionVision';
import type { AboutPage } from '@/studio/types';

export default async function About() {
  const aboutPage: AboutPage = await sanityClient.fetch(aboutPageQuery);

  return (
    <>
      <section className="relative">
        <img
          src="/images/home-hero-bg.svg"
          className="hidden sm:block w-full aspect-[1.58/1] absolute left-0 right-0 top-0"
          alt=""
        />
        <img
          src="/images/home-hero-bg-mobile.svg"
          className="sm:hidden w-full aspect-[0.67/1] absolute left-0 right-0 top-0"
          alt=""
        />
        <div className="relative padding-global pt-[8.38rem] sm:pt-[9.88rem]">
          <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] max-w-[70rem]">
            {aboutPage.title}
          </h1>
          <div className="flex items-center justify-center sm:justify-end mt-[4.5rem] sm:mt-14">
            <Link href="/">
              <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-4 text-xers-blue">
                <div className="text-lg sm:text-2xl font-normal sm:font-medium ml-4 -tracking-0 sm:-tracking-[0.03rem]">
                  Know us better
                </div>
                <div className="relative w-20 aspect-square grid place-items-center border border-xers-blue rounded-full">
                  <div className="flex flex-col gap-[0.3125rem] absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-[0.06]" />
                    <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-30" />
                    <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full" />
                  </div>
                  <div className="relative w-6 aspect-square">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </Link>
          </div>
        </div>
      </section>

      <SectionBros aboutPage={aboutPage} />
      <SectionMovingText />
      <SectionVision aboutPage={aboutPage} />

      {aboutPage.imagesDesktop && (
        <section className="padding-global hidden sm:block mb-[8.5rem]">
          <div
            style={{ aspectRatio: `${aboutPage.imagesDesktop.aspectRatio}/1` }}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              fill={true}
              src={aboutPage.imagesDesktop.url}
              alt={aboutPage.imagesDesktop.caption}
              placeholder="blur"
              blurDataURL={aboutPage.imagesDesktop.lqip}
            />
          </div>
        </section>
      )}
    </>
  );
}
