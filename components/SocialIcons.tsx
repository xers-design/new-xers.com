import type { General } from "@/studio/types";

export default function SocialIcons({ generalData }: { generalData: General }) {
  return (
    <div className="relative flex gap-3 sm:gap-6">
      {generalData.socialLinks &&
        generalData.socialLinks.length > 0 &&
        generalData.socialLinks.map((link, i) => (
          <a
            key={i}
            target="_black"
            href={link.to}
            className="social-icon w-11 aspect-square"
          >
            <span className="sr-only">{link.label}</span>
            <img src={link.icon.url} alt="" className="w-full h-full" />
          </a>
        ))}
    </div>
  );
}
