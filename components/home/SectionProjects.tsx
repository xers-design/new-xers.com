import Link from 'next/link';
import Project from '@/components/home/Project';
import type { HomePage } from '@/studio/types';

export default function SectionProjects({ homePage }: { homePage: HomePage }) {
  return (
    <section className="h-[calc(300vh+32rem)]">
      <div className="sticky z-10 top-14 overflow-hidden pb-2">
        <div className="padding-global flex items-end justify-center sm:justify-between">
          <img
            src="/images/badge-agency.svg"
            alt="Xers Product Design Agency Badge"
            className="w-20 sm:w-[14.25rem] aspect-square"
          />
          <Link href="/projects" className="hidden sm:block">
            <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem] text-xers-blue border border-xers-blue rounded-full px-8 py-6 mb-4">
              View All Projects
            </div>
          </Link>
        </div>
        <div className="mt-14 sm:mt-[4.5rem] pb-40">
          <div className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] whitespace-nowrap -translate-x-[10%]">
            Designing revolutionary products
          </div>
        </div>
      </div>

      {homePage.projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </section>
  );
}
