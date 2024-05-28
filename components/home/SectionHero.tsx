import Link from 'next/link';

export default function SectionHero() {
  return (
    <section className="relative ">
      <img
        src="/images/home-hero-bg.svg"
        className="hidden sm:block w-full aspect-[1.58/1] absolute left-0 right-0 top-0"
        alt=""
      />
      <img
        src="/images/home-hero-bg-mobile.svg"
        className="sm:hidden w-full aspect-[0.67/1] absolute left-0 right-0 top-0"
        alt=""
      />
      <img
        src="/images/home-hero-shape.svg"
        className="hidden sm:block w-20 aspect-[0.4/1] absolute right-0 top-[12.5rem]"
        alt=""
      />
      <div className="relative padding-global pt-[8.38rem] sm:pt-44 pb-14 sm:pb-[7.5rem]">
        <div>
          <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]">
            We flourish your digital
            <span className="text-xers-purple"> vision</span> into
            <span className="text-xers-green"> reality</span>.
          </h1>
        </div>
        <div className="flex items-center justify-between mt-8 sm:mt-20">
          <Link href="/">
            <div className="bg-black rounded-full p-4 flex items-center gap-11 sm:gap-[5.3rem] text-white">
              <div className="text-xl sm:text-2xl font-medium ml-2 sm:ml-4 -tracking-[0.025rem] sm:-tracking-[0.03rem]">
                Contact us
              </div>
              <div className="w-10 sm:w-16 aspect-square rounded-full bg-xers-blue grid place-items-center">
                <div className="w-6 aspect-square hidden sm:block">
                  <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 14H26M26 14L14 2M26 14L14 26"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-4 aspect-square sm:hidden">
                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 10H18M18 10L10 2M18 10L10 18"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/" className="hidden sm:block">
            <div className="flex items-center gap-4 text-xers-blue">
              <div className="text-2xl font-medium ml-4 -tracking-[0.03rem]">Take a ride</div>
              <div className="relative w-20 aspect-square grid place-items-center border border-xers-blue rounded-full">
                <div className="flex flex-col gap-[0.3125rem] absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-[0.06]" />
                  <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full opacity-30" />
                  <div className="w-1 aspect-square shrink-0 bg-xers-blue rounded-full" />
                </div>
                <div className="relative w-6 aspect-square">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 5V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 12L12 19L5 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
