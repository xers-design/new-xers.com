import SectionHero from '@/components/home/SectionHero';
import SectionLogos from '@/components/home/SectionLogos';
import SectionHighlights from '@/components/home/SectionHighlights';
import SectionMeetFounders from '@/components/home/SectionMeetFounders';
import SectionProjects from '@/components/home/SectionProjects';
import SectionServices from '@/components/home/SectionServices';
import SectionProcess from '@/components/home/SectionProcess';
import SectionDesignDialogues from '@/components/home/SectionDesignDialogues';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionLogos />
      <SectionHighlights />
      <SectionMeetFounders />
      <SectionProjects />
      <SectionServices />
      <SectionProcess />
      <SectionDesignDialogues />
    </>
  );
}
