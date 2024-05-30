import Image from 'next/image';

export default function SectionChallenges() {
  return (
    <section>
      <div className="padding-global-2 pt-[3.75rem] sm:pt-[11.25rem]">
        <div className="grid sm:grid-cols-2 gap-5 items-start bg-xers-off-white p-5 sm:rounded-lg -mx-2 sm:mx-0">
          <div className="hidden sm:block bg-white rounded-2xl overflow-hidden">
            <div className="grid gap-8 px-12 pt-10 max-w-[32rem]">
              <h2 className="text-5xl font-medium leading-[1.1] -tracking-[0.12rem]">Challenges & Solutions</h2>
              <p className="text-2xl font-normal leading-[1.5]">
                We’ve experienced how to design the experience for thousands of users.
              </p>
            </div>
            <div className="mt-16 relative w-full aspect-square">
              <Image src="/images/project-challenge.png" alt="" fill={true} />
            </div>
          </div>
          <div className="grid gap-5 py-7">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 p-6 sm:p-12 bg-white rounded-2xl">
              <div className="text-[2.75rem] font-medium leading-[1.3] -mt-1 -tracking-[0.11rem]">01.</div>
              <div className="grid gap-10">
                <div className="grid gap-[0.88rem]">
                  <div className="text-xl font-semibold leading-[1.5]">Challenge</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
                <div className="grid gap-[0.88rem] mt-2 sm:mt-0">
                  <div className="text-xl font-semibold leading-[1.5]">Solution</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 p-6 sm:p-12 bg-white rounded-2xl">
              <div className="text-[2.75rem] font-medium leading-[1.3] -mt-1 -tracking-[0.11rem]">02.</div>
              <div className="grid gap-10">
                <div className="grid gap-[0.88rem]">
                  <div className="text-xl font-semibold leading-[1.5]">Challenge</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
                <div className="grid gap-[0.88rem] mt-2 sm:mt-0">
                  <div className="text-xl font-semibold leading-[1.5]">Solution</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 p-6 sm:p-12 bg-white rounded-2xl">
              <div className="text-[2.75rem] font-medium leading-[1.3] -mt-1 -tracking-[0.11rem]">03.</div>
              <div className="grid gap-10">
                <div className="grid gap-[0.88rem]">
                  <div className="text-xl font-semibold leading-[1.5]">Challenge</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
                <div className="grid gap-[0.88rem] mt-2 sm:mt-0">
                  <div className="text-xl font-semibold leading-[1.5]">Solution</div>
                  <p className="text-xl font-normal leading-[1.5]">
                    Let’s together delve into user segments, define clear product objectives, and streamline your
                    business direction effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
