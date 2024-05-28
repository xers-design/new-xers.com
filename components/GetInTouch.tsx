import SocialIcons from '@/components/SocialIcons';

export default function GetInTouch() {
  return (
    <section id="get-in-touch">
      <div className="padding-global pb-14">
        <div className="relative p-[4.5rem] pb-10 pr-[3.75rem] bg-black text-white rounded-2xl overflow-hidden">
          <img src="/images/contact-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-[4.5rem] left-[4.5rem] w-[40.44rem] h-[11.94rem] bg-black blur-[8.75rem]" />
          <h2 className="relative text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem] max-w-[38rem]">
            Let’s get in touch with us
          </h2>
          <form className="relative mt-14 flex flex-col gap-4 items-start max-w-[39.5rem] w-full">
            <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-5">
              <label htmlFor="name" className="text-xl font-medium leading-[1] -tracking-[0.025rem]">
                May we know your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="appearance-none leading-[1] bg-transparent outline-none text-[2rem] font-medium placeholder:text-white placeholder:opacity-[0.12]"
              />
            </div>
            <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-5">
              <label htmlFor="email" className="text-xl font-medium leading-[1] -tracking-[0.025rem]">
                Your email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@domain.com"
                className="appearance-none leading-[1] bg-transparent outline-none text-[2rem] font-medium placeholder:text-white placeholder:opacity-[0.12]"
              />
            </div>
            <div className="bg-xers-off-black rounded-lg grid gap-2 w-full px-6 py-5">
              <label htmlFor="message" className="text-xl font-medium leading-[1] -tracking-[0.025rem]">
                What do you want to discuss about?
              </label>
              <textarea
                id="message"
                name="message"
                className="appearance-none h-[8.8rem] leading-[1] bg-transparent outline-none text-[2rem] font-medium"
              />
            </div>
            <button className="bg-xers-blue rounded-full p-4 flex items-center gap-[5.3rem] mt-4">
              <div className="text-2xl font-medium ml-4 -tracking-[0.03rem]">Submit contact form</div>
              <div className="w-16 aspect-square rounded-full bg-white text-xers-blue grid place-items-center">
                <div className="w-6 aspect-square">
                  <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 14H26M26 14L14 2M26 14L14 26"
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
          <div className="mt-16 flex justify-end">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
