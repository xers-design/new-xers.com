export const dynamic = "force-dynamic";

import Image from "next/image";
import { sanityClient } from "@/studio/lib/client";
import { aboutPageQuery } from "@/studio/queries";
import SectionBros from "@/components/about/SectionBros";
import MovingText from "@/components/MovingText";
import KnowUsBetterButton from "@/components/about/KnowUsBetterButton";
import SectionVision from "@/components/about/SectionVision";
import AnimatedText from "@/components/AnimatedText";
import FadeUp from "@/components/FadeUp";
import type { AboutPage } from "@/studio/types";

const words = [
  { text: "user", color: "text-black", dot: false },
  { text: "experience", color: "text-black", dot: false },
  { text: "design", color: "text-xers-purple", dot: true },
  { text: "design", color: "text-black", dot: false },
  { text: "spirit", color: "text-xers-green", dot: true },
];

export default async function About() {
  const aboutPage: AboutPage = await sanityClient.fetch(
    aboutPageQuery,
    {},
    { cache: "no-store" }
  );

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
        <div className="relative padding-global pt-[8.38rem] sm:pt-[9.88rem] overflow-hidden">
          <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] max-w-[70rem]">
            <AnimatedText className="pb-1 sm:pb-3">
              {aboutPage.title}
            </AnimatedText>
          </h1>
          <div className="flex items-center justify-center sm:justify-end mt-[4.5rem] sm:mt-14">
            <FadeUp>
              <KnowUsBetterButton />
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionBros aboutPage={aboutPage} />
      <MovingText words={words} />
      <SectionVision aboutPage={aboutPage} />

      {aboutPage.imagesDesktop && (
        <section className="padding-global hidden sm:block mb-[8.5rem]">
          <FadeUp>
            <div
              style={{
                aspectRatio: `${aboutPage.imagesDesktop.aspectRatio}/1`,
              }}
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
          </FadeUp>
        </section>
      )}
    </>
  );
}
