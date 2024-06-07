import React from 'react';
import type { HomePage } from '@/studio/types';

export default function SectionHighlights({ homePage }: { homePage: HomePage }) {
  return (
    <section>
      <div className="padding-global flex flex-wrap items-center justify-between gap-y-20 mt-16 sm:mt-24 mb-[7.6rem] sm:mb-[8.25rem]">
        <div className="w-1/2 sm:w-auto mr-auto">
          <img src="/images/home-highlights-shape.svg" alt="" className="w-[6.25rem] sm:w-[12.5rem] aspect-square" />
        </div>

        {homePage.highlights && homePage.highlights.length > 0 && (
          <>
            {homePage.highlights.map((highlight, i) => (
              <React.Fragment key={i}>
                <div className="grid gap-2 sm:gap-4 w-1/2 sm:w-auto">
                  <div className="text-base sm:text-2xl font-medium leading-[1.1] -tracking-[0.04rem] sm:-tracking-[0.06rem]">
                    {highlight.verb}
                  </div>
                  <div className="text-5xl sm:text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">
                    {highlight.number}
                  </div>
                  <div className="text-base sm:text-2xl font-normal leading-[1.1]">{highlight.noun}</div>
                </div>
                {i + 1 !== homePage.highlights?.length && (
                  <div className="hidden sm:block w-[1px] h-32 bg-black opacity-10 mx-[4.125rem]"></div>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
