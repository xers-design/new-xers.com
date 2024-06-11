import Link from 'next/link';
import Project from '@/components/home/Project';
import MovingText from '@/components/home/MovingText';
import Badge from '@/components/Badge';
import type { HomePage } from '@/studio/types';

export default function SectionProjects({ homePage }: { homePage: HomePage }) {
  return (
    <section className="h-[calc(300dvh+32rem)]">
      <div className="sticky z-10 top-14 overflow-hidden pb-2">
        <div className="padding-global flex items-end justify-center sm:justify-between">
          <div className="w-20 sm:w-[14.25rem] aspect-square">
            <Badge image="/images/badge-agency.svg" />
          </div>
          <Link href="/projects" className="hidden sm:block">
            <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem] text-xers-blue border border-xers-blue rounded-full px-8 py-6 mb-4">
              View All Projects
            </div>
          </Link>
        </div>
        <div className="mt-14 sm:mt-[4.5rem]">
          <MovingText />
        </div>
      </div>

      {homePage.projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </section>
  );
}
