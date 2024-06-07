import Image from 'next/image';
import Video from '@/components/Video';
import type { HomePage } from '@/studio/types';

export default function SectionDesignDialogues({ homePage }: { homePage: HomePage }) {
  return (
    <section>
      <div className="padding-global pb-10 sm:pb-[9.25rem]">
        <div className="grid gap-4 sm:gap-6 relative">
          <h2 className="text-base sm:text-2xl font-medium leading-[1.1] -tracking-[0.04rem] sm:-tracking-[0.03rem]">
            Design Dialogues
          </h2>
          <h3 className="text-5xl sm:text-7xl font-medium leading-[1.1] -tracking-[0.12rem] sm:-tracking-[0.18rem]">
            Let’s grow together...
          </h3>
          <p className="text-base sm:text-2xl font-normal leading-[1.5] max-w-[33.88rem] mt-2 sm:mt-0">
            Rapid prototyping is in our blood. We build living and breathing prototype awesome ideas in hours that are
            testable.
          </p>

          <div className="relative mt-6 sm:mt-0 sm:absolute right-0 bottom-0 w-full sm:w-[45rem] aspect-[16/9] overflow-hidden rounded-[1.13rem]">
            <Video video={homePage.videoTwo} />
          </div>

          <img
            src="/images/design-dialogues.svg"
            alt="Design Dialogues"
            className="absolute top-0 right-0 sm:static sm:mt-[10rem] w-[4.56rem] sm:w-[15.94rem] h-[2.18rem] sm:h-[7.44rem]"
          />
        </div>
      </div>
    </section>
  );
}
