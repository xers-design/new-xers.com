import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import type { ProjectDetail } from '@/studio/types';

export default function SectionNext({ project }: { project: ProjectDetail }) {
  const nextSlug = project.nextProject ? project.nextProject.slug.current : project.firstProject.slug.current;

  return (
    <>
      <section>
        <div className="padding-global">
          <div className="-mx-4 sm:mx-0">
            <FadeUp>
              <div className="hidden sm:block relative inset-0 w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={project.outroImageDesktop.url}
                  alt={project.outroImageDesktop.caption}
                  placeholder="blur"
                  blurDataURL={project.outroImageDesktop.lqip}
                  fill={true}
                />
              </div>
            </FadeUp>
            <FadeUp>
              <div className="sm:hidden relative inset-0 w-full aspect-[0.75/1] rounded-lg overflow-hidden">
                <Image
                  src={project.outroImageMobile.url}
                  alt={project.outroImageMobile.caption}
                  placeholder="blur"
                  blurDataURL={project.outroImageMobile.lqip}
                  fill={true}
                />
              </div>
            </FadeUp>

            <div className="flex justify-center relative -translate-y-1/2 px-10 sm:px-0">
              <Link href={`/projects/${nextSlug}`} className="w-full sm:w-auto">
                <div className="bg-black rounded-full p-4 flex items-center justify-between gap-5 sm:gap-[5.3rem] text-white">
                  <div className="text-2xl font-medium ml-4 -tracking-[0.03rem] whitespace-nowrap">Next Project</div>
                  <div className="shrink-0 w-10 sm:w-16 aspect-square rounded-full bg-xers-blue grid place-items-center">
                    <div className="w-6 aspect-square hidden sm:block">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 14H26M26 14L14 2M26 14L14 26"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-4 aspect-square sm:hidden">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 10H18M18 10L10 2M18 10L10 18"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
