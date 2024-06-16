import React from "react";
import type { HomePage } from "@/studio/types";
import AnimatedText from "@/components/AnimatedText";
import FadeUp from "@/components/FadeUp";

export default function SectionHighlights({
  homePage,
}: {
  homePage: HomePage;
}) {
  return (
    <section>
      <div className="padding-global flex flex-wrap items-center justify-between gap-y-20 mt-16 sm:mt-24 mb-[7.6rem] sm:mb-[8.25rem] ">
        <div className="w-1/2 sm:w-auto mr-auto">
          <FadeUp>
            <img
              src="/images/home-highlights-shape.svg"
              alt=""
              className="w-[6.25rem] sm:w-[11.8rem] aspect-square"
            />
          </FadeUp>
        </div>

        {homePage.highlights && homePage.highlights.length > 0 && (
          <>
            {homePage.highlights.map((highlight, i) => (
              <React.Fragment key={i}>
                <div className="grid gap-2 sm:gap-4 w-1/2 sm:w-auto sm:min-w-[11rem]">
                  <div className="text-base sm:text-2xl font-medium leading-[1.1] -tracking-[0.04rem] sm:-tracking-[0.06rem]">
                    <AnimatedText>{highlight.verb}</AnimatedText>
                  </div>
                  <div className="text-5xl sm:text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">
                    <AnimatedText>{highlight.number}</AnimatedText>
                  </div>
                  <div className="text-base sm:text-2xl font-normal leading-[1.1]">
                    <AnimatedText>{highlight.noun}</AnimatedText>
                  </div>
                </div>
                {i + 1 !== homePage.highlights?.length && (
                  <FadeUp>
                    <div className="hidden sm:block w-[1px] h-32 bg-black opacity-10 mx-[4.125rem]" />
                  </FadeUp>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
