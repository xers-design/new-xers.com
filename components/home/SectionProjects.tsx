import Link from 'next/link';
import Project from '@/components/home/Project';

export default function SectionProjects() {
  return (
    <section className="h-[calc(300vh+32rem)]">
      <div className="sticky top-14 overflow-hidden pb-2">
        <div className="padding-global flex items-end justify-center sm:justify-between">
          <img
            src="/images/badge-agency.svg"
            alt="Xers Product Design Agency Badge"
            className="w-20 sm:w-[14.25rem] aspect-square"
          />
          <Link href="/projects" className="hidden sm:block">
            <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem] border border-xers-blue rounded-full px-8 py-6 mb-4">
              View All Projects
            </div>
          </Link>
        </div>
        <div className="mt-14 sm:mt-[4.5rem]">
          <div className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] whitespace-nowrap -translate-x-[10%]">
            Designing revolutionary products
          </div>
        </div>
      </div>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative h-screen  grid place-items-center">
          <Project />
        </div>
      ))}
    </section>
  );
}
