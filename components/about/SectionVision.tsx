import Image from 'next/image';
import Video from '@/components/Video';
import AnimatedText from '@/components/AnimatedText';
import FadeUp from '@/components/FadeUp';
import type { AboutPage, Image as ImageType } from '@/studio/types';

export default function SectionVision({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <section>
      <div className="padding-global pb-10 sm:pb-[8.5rem]">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <h2 className="text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem]">
            <AnimatedText>{aboutPage.visionTitle}</AnimatedText>
          </h2>
          <div className="text-lg sm:text-[2.75rem] font-normal sm:font-medium leading-[1.5] tracking-0 sm:-tracking-[0.11rem] w-full sm:w-[62rem] mt-6 sm:mt-0">
            <AnimatedText>{aboutPage.visionBody}</AnimatedText>
          </div>
        </div>

        {aboutPage.imagesMobile && (
          <div className="sm:hidden mt-16 flex flex-col gap-6">
            {aboutPage.imagesMobile.map((image: ImageType) => (
              <FadeUp key={image.url}>
                <div style={{ aspectRatio: `${image.aspectRatio}/1` }} className="relative overflow-hidden rounded-2xl">
                  <Image fill={true} src={image.url} alt={image.caption} placeholder="blur" blurDataURL={image.lqip} />
                </div>
              </FadeUp>
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
