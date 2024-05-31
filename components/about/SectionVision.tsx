import Image from 'next/image';

export default function SectionVision() {
  return (
    <section>
      <div className="padding-global pb-10 sm:pb-[8.5rem] pt-0 sm:pt-16">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <h2 className="text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem]">
            Vision
          </h2>
          <div className="text-lg sm:text-[2.75rem] font-normal sm:font-medium leading-[1.5] tracking-0 sm:-tracking-[0.11rem] max-w-[62rem] mt-6 sm:mt-0">
            Flow stands out as Myanmar's exclusive music streaming platform, boasting the most extensive music library
            ever. The application is designed catering to individuals from diverse demographic backgrounds throughout
            Myanmar.
          </div>
        </div>

        <div className="mt-16 sm:mt-[10rem] relative w-full aspect-[1.98/1] overflow-hidden rounded-3xl bg-black">
          <div className="w-full h-full relative">
            {/* <Image src="/images/home-meet-founders.jpg" alt="Xers Founders" fill={true} /> */}
          </div>
          {/* <div className="absolute inset-0 top-auto h-[18.45rem] bg-gradient-to-t from-xers-blue to-transparent" /> */}
          <div className="w-10 sm:w-20 aspect-square text-xers-blue absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_1_2932)">
                <rect width="80" height="80" rx="40" fill="currentColor" />
                <path
                  d="M35.0156 30.9922L49.0156 39.9922L35.0156 48.9922V30.9922Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2932" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2932" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          {/* <h2 className="absolute bottom-14 left-1/2 -translate-x-1/2 text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem] text-white text-center w-full">
            Meet the founders of xers
          </h2> */}
        </div>
      </div>
    </section>
  );
}
