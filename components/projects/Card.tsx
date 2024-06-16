"use client";

import Link from "next/link";
import Image from "next/image";
import { twMerge as twm } from "tailwind-merge";
import AnimatedText from "@/components/AnimatedText";
import FadeUp from "@/components/FadeUp";
import type { Project } from "@/studio/types";

export default function Card({
  project,
  shouldReverse,
}: {
  project: Project;
  shouldReverse: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug.current}`}>
      <div
        className={twm(
          "flex flex-col-reverse sm:flex-row justify-between gap-6 sm:gap-12 bg-xers-off-white p-6 sm:p-12 rounded-2xl sm:rounded-[2rem] w-full sm:w-[69.19rem]",
          shouldReverse && "sm:flex-row-reverse",
        )}
      >
        <div className="flex flex-col gap-2 sm:gap-9 w-full sm:w-[19.81rem]">
          <h2 className="min-w-full text-[2.5rem] sm:text-[4rem] font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.16rem]">
            <AnimatedText>{project.name}</AnimatedText>
          </h2>
          <div className="text-lg sm:text-xl font-normal leading-[1.5] mb-auto">
            <AnimatedText>{project.description}</AnimatedText>
          </div>
          <FadeUp>
            <div className="mt-5 sm:mt-auto w-16 sm:w-[5.25rem] aspect-square text-xers-blue">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="84" height="84" rx="42" fill="currentColor" />
                <path
                  d="M30.863 53.1369L53.1369 30.8631M53.1369 30.8631H30.863M53.1369 30.8631V53.1369"
                  stroke="white"
                  strokeWidth="3.9375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="overflow-hidden relative rounded-lg sm:rounded-3xl w-full aspect-[1.81/1] sm:aspect-auto sm:w-[40rem] sm:h-[22.5rem] shrink-0">
            <Image
              src={project.cardImage.url}
              alt={project.cardImage.caption}
              placeholder="blur"
              blurDataURL={project.cardImage.lqip}
              fill={true}
            />
          </div>
        </FadeUp>
      </div>
    </Link>
  );
}
