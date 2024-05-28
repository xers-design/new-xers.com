import Image from 'next/image';

export default function SectionDesignDialogues() {
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
            <div className="w-full h-full relative">
              <Image src="/images/home-meet-founders.jpg" alt="Xers Founders" fill={true} />
            </div>
            <div className="w-10 sm:w-[5.63rem] aspect-square text-xers-blue absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_2932)">
                  <rect width="80" height="80" rx="40" fill="currentColor" />
                  <path
                    d="M35.0156 30.9922L49.0156 39.9922L35.0156 48.9922V30.9922Z"
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1_2932"
                    x="-8"
                    y="-8"
                    width="96"
                    height="96"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2932" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2932" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
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
