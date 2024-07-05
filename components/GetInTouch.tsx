'use client';

import { usePathname } from 'next/navigation';
import { twMerge as twm } from 'tailwind-merge';
import SocialIcons from '@/components/SocialIcons';
import AnimatedText from '@/components/AnimatedText';
import FadeUp from '@/components/FadeUp';
import sendEmail from '@/app/actions/send-email';
import type { General } from '@/studio/types';

export default function GetInTouch({ generalData }: { generalData: General }) {
  const pathname = usePathname();

  return (
    <section
      id="get-in-touch"
      className={twm(pathname.startsWith('/projects/') && 'hidden')}
    >
      <FadeUp>
        <div className="sm:px-14 sm:pb-14">
          <div className="relative pt-8 sm:pt-[4.5rem] pl-6 sm:pl-[4.5rem] pb-8 sm:pb-10 pr-6 sm:pr-[3.75rem] bg-black text-white sm:rounded-2xl overflow-hidden">
            <img
              src="/images/contact-bg.svg"
              alt=""
              className="hidden sm:block absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/images/contact-bg-mobile.svg"
              alt=""
              className="sm:hidden absolute inset-0 w-full h-full object-cover"
            />
            {pathname === '/contact' && <div className="pt-24 sm:pt-0" />}
            <div
              className={twm(
                'absolute sm:top-[1rem] left-0 sm:left-[2.5rem] w-full sm:w-[40.44rem] h-[10rem] sm:h-[11.94rem] bg-black blur-[4rem] sm:blur-[6rem]',
                // 'absolute sm:top-[4.5rem] left-0 sm:left-[4.5rem] w-full sm:w-[40.44rem] h-[10rem] sm:h-[11.94rem] bg-black blur-[4rem] sm:blur-[8.75rem]',
                pathname === '/contact' ? 'top-28' : 'top-5'
              )}
            />
            <h2 className="relative text-5xl sm:text-[5.25rem] font-medium leading-[1.1] -tracking-[0.12rem] sm:-tracking-[0.21rem] max-w-[40rem]">
              {/* Let’s get in touch with us */}
              <AnimatedText className="pb-1">
                Let’s get in touch with us
              </AnimatedText>
            </h2>
            <FadeUp>
              <form
                action={sendEmail}
                className="relative mt-14 flex flex-col gap-4 items-start max-w-[39.5rem] w-full"
              >
                <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-3 sm:py-5">
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-xl font-medium leading-[1] -tracking-[0.015rem] sm:-tracking-[0.025rem]"
                  >
                    May we know your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full appearance-none leading-[1] bg-transparent outline-none text-lg -tracking-[0.0225rem] sm:-tracking-[0.04rem] sm:text-[2rem] font-medium placeholder:text-white placeholder:opacity-[0.12]"
                  />
                </div>
                <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-3 sm:py-5">
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-xl font-medium leading-[1] -tracking-[0.015rem] sm:-tracking-[0.025rem]"
                  >
                    Your email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@domain.com"
                    className="w-full appearance-none leading-[1] bg-transparent outline-none text-lg -tracking-[0.0225rem] sm:-tracking-[0.04rem] sm:text-[2rem] font-medium placeholder:text-white placeholder:opacity-[0.12]"
                  />
                </div>
                <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-3 sm:py-5">
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-xl font-medium leading-[1] -tracking-[0.015rem] sm:-tracking-[0.025rem]"
                  >
                    What do you want to discuss about?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full appearance-none h-[8.8rem] leading-[1] bg-transparent outline-none text-lg -tracking-[0.0225rem] sm:-tracking-[0.04rem] sm:text-[2rem] font-medium"
                  />
                </div>
                <button className="w-full sm:w-auto bg-xers-blue rounded-full p-4 flex items-center justify-between gap-5 sm:gap-[5.3rem] mt-4">
                  <div className="text-xl sm:text-2xl font-medium ml-2 sm:ml-4 -tracking-[0.025rem] sm:-tracking-[0.03rem]">
                    Submit contact form
                  </div>
                  <div className="w-10 sm:w-16 aspect-square rounded-full bg-white text-xers-blue grid place-items-center">
                    <div className="w-6 aspect-square hidden sm:block">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 10H18M18 10L10 2M18 10L10 18"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </form>
            </FadeUp>
            <div className="mt-16 hidden sm:flex justify-end">
              <SocialIcons generalData={generalData} />
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
