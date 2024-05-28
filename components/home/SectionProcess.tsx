export default function SectionProcess() {
  return (
    <section>
      <div className="padding-global-2 pt-20 sm:pt-[11.75rem] pb-10 sm:pb-[8.25rem]">
        <div className="bg-xers-off-white rounded-3xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start">
            <div className="hidden sm:block bg-white rounded-2xl overflow-hidden">
              <div className="grid gap-8 px-12 pt-10">
                <h2 className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
                  How we define and design user experience...
                </h2>
                <p className="text-2xl font-normal leading-[1.5] max-w-[26.75rem]">
                  We’ve experienced how to design the experience for thousands of users.
                </p>
              </div>
              <img
                src="/images/process.svg"
                alt=""
                className="mt-24 mb-12 min-w-[57.5rem] -translate-x-[8.4rem] -rotate-[15deg]"
              />
            </div>

            <div className="sm:ml-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="grid gap-8 sm:gap-10 pl-6 sm:pl-8 pr-6 sm:pr-5 py-10 bg-white rounded-2xl">
                <h3 className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
                  Know
                </h3>
                <img
                  src="/images/process-know.svg"
                  alt=""
                  className="w-[5.06rem] sm:w-[6.75rem] h-[4.88rem] sm:h-[6.5rem]"
                />
                <p className="text-lg font-normal leading-[1.5]">
                  Let’s together delve into user segments, define clear product objectives, and streamline your business
                  direction effectively.
                </p>
              </div>

              <div className="grid gap-10 pl-8 pr-5 py-10 bg-white rounded-2xl">
                <h3 className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
                  Explore
                </h3>
                <img
                  src="/images/process-explore.svg"
                  alt=""
                  className="w-[4.78rem] sm:w-[6.38rem] h-[4.78rem] sm:h-[6.38rem]"
                />
                <p className="text-lg font-normal leading-[1.5]">
                  No beat around the bush. Will examine and explore all solutions that profits your business and offer
                  great experience to your users.
                </p>
              </div>

              <div className="grid gap-10 pl-8 pr-5 py-10 bg-white rounded-2xl">
                <h3 className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
                  Build
                </h3>
                <img
                  src="/images/process-build.svg"
                  alt=""
                  className="w-[4.31rem] sm:w-[5.75rem] h-[4.78rem] sm:h-[6.38rem]"
                />
                <p className="text-lg font-normal leading-[1.5]">
                  Rapid prototyping is in our blood. We build living and breathing prototype in hours that are fully
                  testable.
                </p>
              </div>

              <div className="grid gap-10 pl-8 pr-5 py-10 bg-white rounded-2xl">
                <h3 className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
                  Test
                </h3>
                <img
                  src="/images/process-test.svg"
                  alt=""
                  className="w-[3.84rem] sm:w-[5.13rem] h-[4.78rem] sm:h-[6.38rem]"
                />
                <p className="text-lg font-normal leading-[1.5]">
                  Most exciting! we win early or we learn early. Let’s be sure that we give users best value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
