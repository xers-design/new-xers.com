import Image from 'next/image';

export default function SectionServices() {
  return (
    <section>
      <div className="padding-global pt-[7.5rem] grid gap-14">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-[1.1] -tracking-[0.03rem]">Services</h2>
            <div className="relative w-[13.75rem] h-1 rounded-full bg-xers-cloudy-blue overflow-hidden">
              <div className="absolute inset-0 right-auto h-full w-1/2 bg-black" />
            </div>
          </div>
          <h3 className="text-7xl font-medium leading-[1.1] -tracking-[0.18rem]">End to End Product Design</h3>
          <p className="text-2xl font-normal leading-[1.5] max-w-[58.7rem]">
            We cover the entire process of the Product Design. From ux research, market research, ideations, top notch
            interfaces all the way to building a future-proof maintainable design system + developer handoff.
          </p>
        </div>

        <div className="relative">
          <div className="w-full aspect-[2.66/1] relative overflow-hidden rounded-xl">
            <Image src="/images/services-e2e.jpg" alt="E2E Product Design Service" fill={true} />
          </div>
          <img
            src="/images/badge-agency.svg"
            alt="Xers Product Design Agency Badge"
            className="w-[7.13rem] aspect-square absolute -bottom-10 right-[1.75rem]"
          />
        </div>
      </div>
    </section>
  );
}
