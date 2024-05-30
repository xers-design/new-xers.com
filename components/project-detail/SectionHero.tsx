import Image from 'next/image';

export default function SectionHero() {
  return (
    <section className="relative aspect-[0.75/1] sm:aspect-auto overflow-hidden text-white">
      <div className="hidden sm:block absolute inset-0 w-full h-full">
        <Image src="/images/project-confie-detail-featured.jpg" alt="Confie" fill={true} />
      </div>
      <div className="sm:hidden absolute inset-0 w-full h-full">
        <Image src="/images/project-confie-detail-featured-mobile.jpg" alt="Confie" fill={true} />
      </div>
      <div className="padding-global relative pt-[6rem] sm:pt-[8.13rem] pb-14 sm:pb-[15.63rem] flex flex-col h-full sm:block">
        <div className="relative w-[10.41rem] sm:w-[13.88rem] aspect-[1.61/1]">
          <Image src="/images/project-confie-logo.svg" alt="Confie Logo" fill={true} />
        </div>
        <h1 className="mt-auto text-[4rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.16rem] sm:-tracking-[0.32rem] max-w-[35.31rem]">
          Capture Memories
        </h1>
      </div>
    </section>
  );
}
