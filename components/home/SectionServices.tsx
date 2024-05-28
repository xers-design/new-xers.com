import Image from 'next/image';

export default function SectionServices() {
  return (
    <section>
      <div className="padding-global pt-0 sm:pt-[7.5rem] grid gap-14">
        <div className="grid gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-[1.1] -tracking-[0.03rem]">Services</h2>
            <div className="relative w-[13.75rem] h-1 rounded-full bg-xers-cloudy-blue overflow-hidden">
              <div className="absolute inset-0 right-auto h-full w-1/2 bg-black" />
            </div>
          </div>
          <h3 className="max-w-[20rem] sm:max-w-full text-[2.5rem] sm:text-7xl font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.18rem]">
            End to End Product Design
          </h3>
          <p className="text-lg sm:text-2xl font-normal leading-[1.5] max-w-[58.7rem]">
            We cover the entire process of the Product Design. From ux research, market research, ideations, top notch
            interfaces all the way to building a future-proof maintainable design system + developer handoff.
          </p>
        </div>

        <div className="relative">
          <div className="hidden sm:block w-full aspect-[2.66/1] relative overflow-hidden rounded-xl">
            <Image src="/images/services-e2e.jpg" alt="E2E Product Design Service" fill={true} />
          </div>
          <div className="sm:hidden w-full aspect-[0.61/1] relative overflow-hidden rounded-lg">
            <Image src="/images/services-e2e-mobile.jpg" alt="E2E Product Design Service" fill={true} />
          </div>
          <img
            src="/images/badge-agency.svg"
            alt="Xers Product Design Agency Badge"
            className="hidden sm:block w-[7.13rem] aspect-square absolute -bottom-10 right-[1.75rem]"
          />
        </div>
      </div>
    </section>
  );
}
