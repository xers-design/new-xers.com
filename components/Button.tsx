'use client';

import { useRouter } from 'next/navigation';
import { twMerge as twm } from 'tailwind-merge';

type ButtonProps = {
  clickHandler?: () => void;
  to?: string;
  label: string;
  icon?: boolean;
  color?: 'black' | 'blue' | 'white';
};

export default function Button(props: ButtonProps) {
  const router = useRouter();

  const internalClickHandler = () => {
    props.to && router.push(props.to);
  };

  const showIcon = props.icon ?? true;
  const color = props.color || 'black';

  const wrapperColorClasses: Record<string, string> = {
    black: 'bg-black group-hover:bg-xers-blue text-white',
    blue: 'bg-xers-blue group-hover:bg-xers-off-black group-hover:text-white',
    white: 'bg-white group-hover:bg-xers-blue group-hover:text-white',
  };

  const iconBgColorClasses: Record<string, string> = {
    black: 'bg-xers-blue group-hover:bg-white',
    blue: 'bg-white group-hover:bg-white',
  };

  const iconColorClasses: Record<string, string> = {
    black: 'text-white',
    blue: 'text-xers-blue',
  };

  const iconHoverColorClasses: Record<string, string> = {
    black: 'group-hover:text-xers-blue',
    blue: 'group-hover:text-xers-off-black',
  };

  return (
    <button
      onClick={props.clickHandler || internalClickHandler}
      className="group w-full sm:w-auto"
    >
      <div
        className={twm(
          'relative overflow-hidden rounded-full p-4 flex items-center justify-between gap-11 sm:gap-[5.3rem] transition duration-300',
          wrapperColorClasses[color]
        )}
      >
        <img
          src="/images/button-bg.svg"
          alt=""
          className="absolute inset-0 scale-[1.3] translate-x-10 group-hover:translate-x-0 translate-y-6 group-hover:-translate-y-2 rotate-[12deg] group-hover:rotate-[0deg] transition duration-300"
        />

        <div className="label relative text-xl sm:text-2xl font-medium mx-2 sm:mx-4 -tracking-[0.025rem] sm:-tracking-[0.03rem]">
          {props.label}
        </div>

        {showIcon && (
          <div
            className={twm(
              'relative w-10 sm:w-16 aspect-square rounded-full  transition duration-300 overflow-hidden',
              iconBgColorClasses[color]
            )}
          >
            <div
              className={twm(
                'absolute inset-0 m-auto w-6 aspect-square hidden sm:block transition duration-300 group-hover:translate-x-[200%]',
                iconColorClasses[color]
              )}
            >
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
            <div
              className={twm(
                'absolute inset-0 m-auto w-6 aspect-square hidden sm:block group-hover:text-xers-blue transition duration-300 -translate-x-[200%] group-hover:translate-x-0',
                iconHoverColorClasses[color]
              )}
            >
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

            <div
              className={twm(
                'absolute inset-0 m-auto w-4 aspect-square sm:hidden transition duration-300 group-hover:translate-x-[200%]',
                iconColorClasses[color]
              )}
            >
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
            <div
              className={twm(
                'absolute inset-0 m-auto w-4 aspect-square sm:hidden group-hover:text-xers-blue transition duration-300 -translate-x-[200%] group-hover:translate-x-0',
                iconHoverColorClasses[color]
              )}
            >
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
        )}
      </div>
    </button>
  );
}
