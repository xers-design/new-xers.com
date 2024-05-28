import Image from 'next/image';

export default function SectionImages() {
  return (
    <section>
      <div className="padding-global flex gap-20 mb-14">
        <button className="text-[2.75rem] font-medium leading-[1.5] -tracking-[0.11rem] px-8 py-4 bg-xers-purple text-white rounded-full">
          Web
        </button>
        <button className="text-[2.75rem] font-medium leading-[1.5] -tracking-[0.11rem] px-8 py-4 bg-transparent text-[#C2C2C2] rounded-full">
          Mobile
        </button>
        <button className="text-[2.75rem] font-medium leading-[1.5] -tracking-[0.11rem] px-8 py-4 bg-transparent text-[#C2C2C2] rounded-full">
          TV App
        </button>
      </div>
      <div className="padding-global-2">
        <div className="relative inset-0 w-full h-screen rounded-2xl overflow-hidden">
          <Image src="/images/project-confie-detail-featured.jpg" alt="Confie" fill={true} />
        </div>
      </div>
    </section>
  );
}
