import Image from "next/image";
import { twMerge as twm } from "tailwind-merge";
import AnimatedText from "@/components/AnimatedText";
import FadeUp from "@/components/FadeUp";
import type { ProjectDetail } from "@/studio/types";

export default function SectionChallenges({
  project,
}: {
  project: ProjectDetail;
}) {
  return (
    <section>
      <div className="padding-global-2 pt-[3.75rem] sm:pt-[11.25rem] pb-16 sm:pb-[8.5rem]">
        <div className="grid sm:grid-cols-2 gap-5 items-start bg-xers-off-white p-5 sm:rounded-lg -mx-2 sm:mx-0">
          <div className="hidden sm:block bg-white rounded-2xl overflow-hidden">
            <div
              className={twm(
                "grid gap-8 px-12 pt-10 max-w-[32rem]",
                !project.challengeImage && "pb-10",
              )}
            >
              <h2 className="text-5xl font-medium leading-[1.1] -tracking-[0.12rem]">
                <AnimatedText className="pb-1">
                  Challenges & Solutions
                </AnimatedText>
              </h2>
              <div className="text-2xl font-normal leading-[1.5]">
                <AnimatedText>
                  We’ve experienced how to design the experience for thousands
                  of users.
                </AnimatedText>
              </div>
            </div>
            {project.challengeImage && (
              <FadeUp>
                <div
                  style={{
                    aspectRatio: `${project.challengeImage?.aspectRatio}/1`,
                  }}
                  className="mt-16 relative w-full"
                >
                  <Image
                    src={project.challengeImage?.url}
                    alt={project.challengeImage?.caption}
                    fill={true}
                    placeholder="blur"
                    blurDataURL={project.challengeImage.lqip}
                  />
                </div>
              </FadeUp>
            )}
          </div>
          <div className="grid gap-5 py-7 sm:py-0">
            {project.challenges.map((challenge, i) => (
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 p-6 sm:p-12 bg-white rounded-2xl">
                <div className="text-[2.75rem] w-[8rem] font-medium leading-[1.3] -mt-1 -tracking-[0.11rem]">
                  <AnimatedText>{`0${i + 1}.`}</AnimatedText>
                </div>
                <div className="grid gap-10 w-full">
                  <div className="grid gap-[0.88rem]">
                    <div className="text-xl font-semibold leading-[1.5]">
                      <AnimatedText>Challenge</AnimatedText>
                    </div>
                    <div className="text-xl font-normal leading-[1.5]">
                      <AnimatedText>{challenge.challenge}</AnimatedText>
                    </div>
                  </div>
                  <div className="grid gap-[0.88rem] mt-2 sm:mt-0">
                    <div className="text-xl font-semibold leading-[1.5]">
                      <AnimatedText>Solution</AnimatedText>
                    </div>
                    <div className="text-xl font-normal leading-[1.5]">
                      <AnimatedText>{challenge.solution}</AnimatedText>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
