import Image from 'next/image';

export default function SectionImages() {
  return (
    <section>
      <div className="padding-global flex gap-4 sm:gap-20 mb-14 overflow-scroll hide-scrollbar">
        <button className="shrink-0 text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem] px-5 sm:px-8 py-2 sm:py-4 bg-xers-purple text-white rounded-full">
          Web
        </button>
        <button className="shrink-0 text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem] px-5 sm:px-8 py-2 sm:py-4 bg-transparent text-[#C2C2C2] rounded-full">
          Mobile
        </button>
        <button className="shrink-0 text-[2rem] sm:text-[2.75rem] font-medium leading-[1.5] -tracking-[0.08rem] sm:-tracking-[0.11rem] px-5 sm:px-8 py-2 sm:py-4 bg-transparent text-[#C2C2C2] rounded-full">
          TV App
        </button>
      </div>
      <div className="padding-global-2">
        <div className="relative inset-0 w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image src="/images/project-confie-detail-featured.jpg" alt="Confie" fill={true} />
        </div>
      </div>
    </section>
  );
}
