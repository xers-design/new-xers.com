import Link from 'next/link';
import Image from 'next/image';
import { twMerge as twm } from 'tailwind-merge';

export default function Projects() {
  return (
    <section>
      <div className="padding-global pt-[8.38rem] sm:pt-[9.88rem]">
        <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] max-w-[18rem] sm:max-w-full">
          Explore some of our master pieces.
        </h1>
        <div className="pt-24 pb-10 sm:pt-[10rem] sm:pb-[10rem] relative flex items-start">
          <div className="grid gap-[3.75rem] sm:gap-[10rem]">
            {[...Array(6)].map((_, i) => (
              <Link key={i} href="/projects/something">
                <div
                  className={twm(
                    'flex flex-col-reverse sm:flex-row justify-between gap-6 sm:gap-12 bg-xers-off-white p-6 sm:p-12 rounded-2xl sm:rounded-[2rem] w-full max-w-[69.19rem]',
                    (i + 1) % 2 === 0 && 'sm:flex-row-reverse'
                  )}
                >
                  <div className="flex flex-col gap-2 sm:gap-9 max-w-[19.81rem]">
                    <h2 className="text-[2.5rem] sm:text-[4rem] font-medium leading-[1.1] -tracking-[0.1rem] sm:-tracking-[0.16rem]">
                      Flow Music
                    </h2>
                    <p className="text-lg sm:text-xl font-normal leading-[1.5]">
                      Flow stands out as Myanmar's exclusive music streaming platform
                    </p>
                    <div className="mt-5 sm:mt-auto w-16 sm:w-[5.25rem] aspect-square text-xers-blue">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 84 84"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="84" height="84" rx="42" fill="currentColor" />
                        <path
                          d="M30.863 53.1369L53.1369 30.8631M53.1369 30.8631H30.863M53.1369 30.8631V53.1369"
                          stroke="white"
                          stroke-width="3.9375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="overflow-hidden relative rounded-lg sm:rounded-3xl max-w-full aspect-[1.81/1] sm:aspect-auto sm:w-[40rem] sm:h-[22.5rem] shrink-0">
                    <Image src="/images/project-flow-featured.jpg" alt="Flow Music App" fill={true} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden grow sticky top-[19.25rem] sm:flex justify-end">
            <img src="/images/badge-contact.svg" alt="Contact Xers" className="w-[10rem] aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}
