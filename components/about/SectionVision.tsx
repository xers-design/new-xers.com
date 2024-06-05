import Image from 'next/image';
import Video from '@/components/Video';
import type { AboutPage, Image as ImageType } from '@/studio/types';

export default function SectionVision({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <section>
      <div className="padding-global pb-10 sm:pb-[8.5rem] pt-0 sm:pt-16">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <h2 className="text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem]">
            {aboutPage.visionTitle}
          </h2>
          <div className="text-lg sm:text-[2.75rem] font-normal sm:font-medium leading-[1.5] tracking-0 sm:-tracking-[0.11rem] max-w-[62rem] mt-6 sm:mt-0">
            {aboutPage.visionBody}
          </div>
        </div>

        {aboutPage.imagesMobile && (
          <div className="sm:hidden mt-16 flex flex-col gap-6">
            {aboutPage.imagesMobile.map((image: ImageType) => (
              <div
                key={image.url}
                style={{ aspectRatio: `${image.aspectRatio}/1` }}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image fill={true} src={image.url} alt={image.caption} placeholder="blur" blurDataURL={image.lqip} />
              </div>
            ))}
          </div>
        )}

        {aboutPage.video && (
          <div className="mt-16 sm:mt-[10rem] w-full">
            <Video video={aboutPage.video} />
          </div>
        )}
      </div>
    </section>
  );
}
