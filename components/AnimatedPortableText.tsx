import { PortableText } from "@portabletext/react";
import AnimatedText from "@/components/AnimatedText";
import type { Bio } from "@/studio/types"; // i think this type should be the same with Portable Text

export default function AnimatedPortableText({ value }: { value: Bio[] }) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => <AnimatedText>{children}</AnimatedText>,
        },
      }}
    />
  );
}
