import { sanityClient } from "@/studio/lib/client";
import { projectDetailQuery } from "@/studio/queries";
import SectionHero from "@/components/project-detail/SectionHero";
import SectionInformation from "@/components/project-detail/SectionInformation";
import SectionImages from "@/components/project-detail/SectionImages";
import SectionChallenges from "@/components/project-detail/SectionChallenges";
import SectionTestimonials from "@/components/project-detail/SectionTestimonials";
import SectionNext from "@/components/project-detail/SectionNext";
import type { ProjectDetail } from "@/studio/types";

export default async function ProjectDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project: ProjectDetail = await sanityClient.fetch(projectDetailQuery, {
    slug,
  });

  return (
    <>
      <SectionHero project={project} />
      <SectionInformation project={project} />
      <SectionImages project={project} />
      <SectionChallenges project={project} />
      <SectionTestimonials project={project} />
      <SectionNext project={project} />
    </>
  );
}
