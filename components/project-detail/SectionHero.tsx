import Image from 'next/image';

export default function SectionHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/project-confie-detail-featured.jpg" alt="Confie" fill={true} />
      </div>
      <div className="padding-global relative pt-[8.13rem] pb-[15.63rem]">
        <div className="relative w-[13.88rem] aspect-[1.61/1]">
          <Image src="/images/project-confie-logo.svg" alt="Confie Logo" fill={true} />
        </div>
        <h1 className="text-9xl font-medium leading-[1.1] -tracking-[0.32rem] max-w-[35.31rem]">Capture Memories</h1>
      </div>
    </section>
  );
}
