import Video from "@/components/Video";
import type { HomePage } from "@/studio/types";

export default function SectionMeetFounders({
  homePage,
}: {
  homePage: HomePage;
}) {
  return (
    <section>
      <div className="padding-global pb-20 sm:pb-[7.5rem]">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
          <Video video={homePage.videoOne} />
        </div>
      </div>
    </section>
  );
}
