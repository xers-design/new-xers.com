import { sanityClient } from '@/studio/lib/client';
import { projectsQuery } from '@/studio/queries';
import Card from '@/components/projects/Card';
import type { Project } from '@/studio/types';

export default async function Projects() {
  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  return (
    <section>
      <div className="padding-global pt-[8.38rem] sm:pt-[9.88rem]">
        <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem] max-w-[18rem] sm:max-w-full">
          Explore some of our master pieces.
        </h1>
        <div className="pt-24 pb-10 sm:pt-[10rem] sm:pb-[10rem] relative flex items-start">
          <div className="grid gap-[3.75rem] sm:gap-[10rem]">
            {projects.map((project, i) => (
              <Card key={i} project={project} shouldReverse={(i + 1) % 2 === 0} />
            ))}
          </div>
          <div className="hidden grow sticky top-[19.25rem] sm:flex justify-end">
            <img src="/images/badge-contact.svg" alt="Contact Xers" className="w-[10rem] aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}
