import Link from 'next/link';
import Image from 'next/image';
import { twMerge as twm } from 'tailwind-merge';

export default function Projects() {
  return (
    <section>
      <div className="padding-global pt-[9.88rem]">
        <h1 className="text-9xl font-medium leading-[1.1] -tracking-[0.32rem]">Explore some of our master pieces.</h1>
        <div className="py-[10rem] relative flex items-start">
          <div className="grid gap-[10rem]">
            {[...Array(6)].map((_, i) => (
              <Link key={i} href="/projects/something">
                <div
                  className={twm(
                    'flex justify-between gap-12 bg-xers-off-white p-12 rounded-[2rem] w-full max-w-[69.19rem]',
                    (i + 1) % 2 === 0 && 'flex-row-reverse'
                  )}
                >
                  <div className="flex flex-col gap-9 max-w-[19.81rem]">
                    <h2 className="text-[4rem] font-medium leading-[1.1] -tracking-[0.16rem]">Flow Music</h2>
                    <p className="text-xl font-normal leading-[1.5]">
                      Flow stands out as Myanmar's exclusive music streaming platform
                    </p>
                    <div className="mt-auto w-[5.25rem] aspect-square text-xers-blue">
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
                  <div className="overflow-hidden relative rounded-3xl bg-red-500 w-[40rem] h-[22.5rem] shrink-0">
                    <Image src="/images/project-flow-featured.jpg" alt="Flow Music App" fill={true} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="grow sticky top-[19.25rem] flex justify-end">
            <img src="/images/badge-contact.svg" alt="Contact Xers" className="w-[10rem] aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}
