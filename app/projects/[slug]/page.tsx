import SectionHero from '@/components/project-detail/SectionHero';
import SectionInformation from '@/components/project-detail/SectionInformation';
import SectionImages from '@/components/project-detail/SectionImages';
import SectionChallenges from '@/components/project-detail/SectionChallenges';
import SectionTestimonials from '@/components/project-detail/SectionTestimonials';
import SectionNext from '@/components/project-detail/SectionNext';

export default function ProjectDetail() {
  return (
    <>
      <SectionHero />
      <SectionInformation />
      <SectionImages />
      <SectionChallenges />
      <SectionTestimonials />
      <SectionNext />
    </>
  );
}
