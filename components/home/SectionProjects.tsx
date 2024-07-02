import Link from 'next/link';
import Project from '@/components/home/Project';
import MovingText from '@/components/MovingText';
import Badge from '@/components/Badge';
import FadeUp from '@/components/FadeUp';
import type { HomePage } from '@/studio/types';

const words = [
  { text: 'Designing', color: 'text-xers-purple', dot: false },
  { text: 'revolutionary', color: 'text-black', dot: false },
  { text: 'products', color: 'text-xers-green', dot: false },
];

export default function SectionProjects({ homePage }: { homePage: HomePage }) {
  return (
    <section className="relative h-[calc(300vh+32rem)] sm:mb-32">
      <div className="sticky top-24 h-screen">
        <FadeUp>
          <img
            src="/images/home-projects-bg.svg"
            className="hidden sm:block w-full aspect-[1.28/1] absolute left-0 right-0 top-0"
            alt=""
          />
          <img
            src="/images/home-projects-bg-mobile.svg"
            className="sm:hidden w-full aspect-[0.67/1] absolute left-0 right-0 top-0"
            alt=""
          />
        </FadeUp>
      </div>
      <div className="sticky z-10 top-14 overflow-hidden pb-2 -mt-[100vh]">
        <div className="padding-global flex items-end justify-center sm:justify-between">
          <FadeUp>
            <div className="w-20 sm:w-[14.25rem] aspect-square">
              <Badge image="/images/badge-agency.svg" />
            </div>
          </FadeUp>
          <FadeUp>
            <Link href="/projects" className="hidden sm:block">
              <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem] text-xers-blue border border-xers-blue rounded-full px-8 py-6 mb-4">
                View All Projects
              </div>
            </Link>
          </FadeUp>
        </div>
        <div className="mt-14 sm:-mt-[8rem]">
          <MovingText words={words} />
        </div>
      </div>

      {homePage.projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </section>
  );
}
