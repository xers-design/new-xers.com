import { sanityClient } from '@/studio/lib/client';
import { homePageQuery } from '@/studio/queries';
import SectionHero from '@/components/home/SectionHero';
import SectionLogos from '@/components/home/SectionLogos';
import SectionHighlights from '@/components/home/SectionHighlights';
import SectionMeetFounders from '@/components/home/SectionMeetFounders';
import SectionProjects from '@/components/home/SectionProjects';
import SectionServices from '@/components/home/SectionServices';
import SectionServicesMobile from '@/components/home/SectionServicesMobile';
import SectionProcess from '@/components/home/SectionProcess';
import SectionDesignDialogues from '@/components/home/SectionDesignDialogues';
import type { HomePage } from '@/studio/types';

export default async function Home() {
  const homePage: HomePage = await sanityClient.fetch(homePageQuery);

  return (
    <>
      <SectionHero />
      <SectionLogos homePage={homePage} />
      <SectionHighlights homePage={homePage} />
      <SectionMeetFounders homePage={homePage} />
      <SectionProjects homePage={homePage} />
      <SectionServices homePage={homePage} />
      <SectionServicesMobile homePage={homePage} />
      <SectionProcess />
      <SectionDesignDialogues homePage={homePage} />
    </>
  );
}
