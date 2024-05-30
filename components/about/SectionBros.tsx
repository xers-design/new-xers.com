import Image from 'next/image';

export default function SectionBros() {
  return (
    <section>
      <div className="padding-global">
        <div className="sm:px-[7rem] mt-16 sm:mt-[7.5rem] sm:flex justify-between">
          <div className="relative w-full max-w-[27rem]">
            <div className="relative overflow-hidden w-full aspect-[0.89/1] rounded-2xl">
              <Image src="/images/about-big-bro.jpg" alt="Aung Phyoe Win" fill={true} />
            </div>
            <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] -tracking-[0.03rem] px-4 py-[0.63rem] bg-xers-purple rounded-full absolute -top-4 right-0 sm:-right-4 rotate-[15.51deg] text-white">
              Big bro
            </div>
            <div className="text-[2.5rem] sm:text-[3.75rem] leading-[1.5] font-medium -tracking-[0.1rem] sm:-tracking-[0.15rem] mt-5 sm:mt-8 mb-2 sm:mb-0">
              Aung Phyoe Win
            </div>
            <div className="flex items-center justify-between mb-5 sm:mb-8 max-w-[25.75rem]">
              <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] leading-0 sm:-tracking-[0.03rem] opacity-50">
                Founder@xers
              </div>
              <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] leading-0 sm:-tracking-[0.03rem] opacity-50">
                UI Designer@Codigo
              </div>
            </div>
            <p className="text-lg sm:text-2xl leading-[1.5] tracking-0 sm:-tracking-[0.03rem]">
              Flow stands out as Myanmar's exclusive music streaming platform, boasting the most extensive music library
              ever.
            </p>
          </div>

          <div className="relative w-full max-w-[27rem] mt-20 sm:mt-[7.19rem]">
            <div className="relative overflow-hidden w-full aspect-[0.89/1] rounded-2xl">
              <Image src="/images/about-little-bro.jpg" alt="Ye Min Htun" fill={true} />
            </div>
            <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] -tracking-[0.03rem] px-4 py-[0.63rem] bg-xers-green rounded-full absolute -top-4 -left-2 sm:-left-4 -rotate-[15.51deg] text-white">
              Lil bro
            </div>
            <div className="text-[2.5rem] sm:text-[3.75rem] leading-[1.5] font-medium -tracking-[0.1rem] sm:-tracking-[0.15rem] mt-5 sm:mt-8 mb-2 sm:mb-0">
              Ye Min Htun
            </div>
            <div className="flex items-center justify-between mb-5 sm:mb-8 max-w-[25.75rem]">
              <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] tracking-0 sm:-tracking-[0.03rem] opacity-50">
                Founder@xers
              </div>
              <div className="text-lg sm:text-2xl font-normal sm:font-medium leading-[1.5] tracking-0 sm:-tracking-[0.03rem] opacity-50">
                UX Designer@Codigo
              </div>
            </div>
            <p className="text-lg sm:text-2xl leading-[1.5] tracking-0 sm:-tracking-[0.03rem]">
              Flow stands out as Myanmar's exclusive music streaming platform, boasting the most extensive music library
              ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
