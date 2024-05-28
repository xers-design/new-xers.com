import Link from 'next/link';
import SectionBros from '@/components/about/SectionBros';
import SectionMovingText from '@/components/about/SectionMovingText';
import SectionVision from '@/components/about/SectionVision';

export default function About() {
  return (
    <>
      <section className="relative">
        <img src="/images/home-hero-bg.svg" className="w-full aspect-[1.58/1] absolute left-0 right-0 top-0" alt="" />
        <div className="relative padding-global pt-[9.88rem]">
          <h1 className="text-9xl font-medium leading-[1.1] -tracking-[0.32rem] max-w-[70rem]">
            We’re twin founder of xers
          </h1>
          <div className="flex items-center justify-end mt-14">
            <Link href="/">
              <div className="flex items-center gap-4 text-xers-blue">
                <div className="text-2xl font-medium ml-4 -tracking-[0.03rem]">Know us better</div>
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
      <SectionBros />
      <SectionMovingText />
      <SectionVision />
    </>
  );
}
