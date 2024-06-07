import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/studio/types';

export default function Project({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug.current}`} className="pointer-events-auto">
      <div className="w-[16.25rem] sm:w-[25rem] grid gap-2">
        <div className="w-full aspect-square overflow-hidden rounded-xl relative">
          <Image
            src={project.homeCardImage.url}
            alt={project.homeCardImage.caption}
            placeholder="blur"
            blurDataURL={project.homeCardImage.lqip}
            fill={true}
          />
        </div>
        <div className="grid gap-2 pl-6 pr-4 sm:pl-8 sm:pr-8 py-6 bg-xers-purple text-white rounded-xl">
          <div className="text-[2rem] sm:text-5xl font-medium leading-[1.1] -tracking-[0.08rem] sm:-tracking-[0.12rem]">
            {project.name}
          </div>
          <div className="text-lg sm:text-2xl font-normal leading-[1.5]">{project.description}</div>
        </div>
      </div>
    </Link>
  );
}
