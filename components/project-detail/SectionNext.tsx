import Image from "next/image";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import type { ProjectDetail } from "@/studio/types";

export default function SectionNext({ project }: { project: ProjectDetail }) {
  return (
    <>
      <section>
        <div className="padding-global">
          <div className="-mx-4 sm:mx-0">
            <FadeUp>
              <div className="hidden sm:block relative inset-0 w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={project.nextProject.featuredImage.url}
                  alt={project.nextProject.featuredImage.caption}
                  placeholder="blur"
                  blurDataURL={project.nextProject.featuredImage.lqip}
                  fill={true}
                />
              </div>
            </FadeUp>
            <FadeUp>
              <div className="sm:hidden relative inset-0 w-full aspect-[0.75/1] rounded-lg overflow-hidden">
                <Image
                  src={project.nextProject.featuredImageMobile.url}
                  alt={project.nextProject.featuredImageMobile.caption}
                  placeholder="blur"
                  blurDataURL={project.nextProject.featuredImageMobile.lqip}
                  fill={true}
                />
              </div>
            </FadeUp>

            <div className="flex justify-center relative -translate-y-1/2 px-10 sm:px-0">
              <Button
                label="Next Project"
                to={`/projects/${project.nextProject.slug.current}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
