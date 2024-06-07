import Image from 'next/image';
import React from 'react';
import type { ProjectDetail } from '@/studio/types';

export default function SectionInformation({ project }: { project: ProjectDetail }) {
  return (
    <section>
      <div className="padding-global relative pt-9 sm:pt-[4.5rem] pb-20 sm:pb-[11.25rem] sm:flex items-start gap-5">
        <div className="grow">
          <h2 className="relative text-[2.5rem] sm:text-[5.25rem] font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.21rem]">
            {project.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative shrink-0 w-[4.25rem] sm:w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-platform.svg" alt="Platform" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-xl sm:text-2xl leading-[1.3] font-medium">Platform</div>
                <div className="text-black text-xl sm:text-2xl leading-[1.3] font-medium">
                  {project.platforms.map((platform) => platform.name).join(' / ')}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative shrink-0 w-[4.25rem] sm:w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-dev-partner.svg" alt="Dev Partner" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-xl sm:text-2xl leading-[1.3] font-medium">
                  Development Partner
                </div>
                <div className="text-black text-xl sm:text-2xl leading-[1.3] font-medium">{project.devPartner}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative shrink-0 w-[4.25rem] sm:w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-client.svg" alt="Client" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-xl sm:text-2xl leading-[1.3] font-medium">Client</div>
                <div className="text-black text-xl sm:text-2xl leading-[1.3] font-medium">{project.client}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative shrink-0 w-[4.25rem] sm:w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-market.svg" alt="Market" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-xl sm:text-2xl leading-[1.3] font-medium">Market</div>
                <div className="text-black text-xl sm:text-2xl leading-[1.3] font-medium">{project.market}</div>
              </div>
            </div>
          </div>

          {project.intro && (
            <div className="mt-20 sm:mt-[6.5rem] grid gap-5">
              <div className="text-black opacity-50 text-xl sm:text-2xl leading-[1.3] font-medium">Intro</div>
              <div className="text-2xl sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.06rem] sm:-tracking-[0.11rem]">
                {project.intro}
              </div>
            </div>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-20 gap-20 sm:gap-0 sm:mt-[9.38rem]">
              {project.highlights.map((highlight, i) => (
                <React.Fragment key={i}>
                  <div className="grid gap-2 sm:gap-4">
                    <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem]">{highlight.verb}</div>
                    <div className="text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">
                      {highlight.number}
                    </div>
                    <div className="text-2xl font-normal leading-[1.1]">{highlight.noun}</div>
                  </div>
                  {i + 1 !== project.highlights?.length && (
                    <div className="hidden sm:block w-[1px] h-32 bg-black opacity-10 mx-[4.125rem]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <div className="hidden sm:block shrink-0 w-[17.69rem] aspect-[4.56/1] sticky top-[4.5rem] mt-2">
          <Image src="/images/project-detail-devices.svg" alt="Devices" fill={true} />
        </div>
      </div>
    </section>
  );
}
