import Link from 'next/link';
import Button from '@/components/Button';
import TakeARideButton from '@/components/home/TakeARideButton';
import AnimatedText from '@/components/AnimatedText';
import FadeUp from '@/components/FadeUp';

export default function SectionHero() {
  return (
    <section className="relative">
      <img
        src="/images/home-hero-bg.svg"
        className="hidden sm:block w-full aspect-[1.58/1] absolute left-0 right-0 top-0"
        alt=""
      />
      <img
        src="/images/home-hero-bg-mobile.svg"
        className="sm:hidden w-full aspect-[0.67/1] absolute left-0 right-0 top-0"
        alt=""
      />
      <img
        src="/images/home-hero-shape.svg"
        className="hidden sm:block w-20 aspect-[0.4/1] absolute right-0 top-[12.5rem]"
        alt=""
      />
      <div className="relative padding-global pt-[8.38rem] sm:pt-44 pb-14 sm:pb-[7.5rem] overflow-hidden">
        <div>
          <h1 className="text-[3.75rem] sm:text-9xl font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.32rem]">
            <AnimatedText className="pb-1 sm:pb-3">
              We flourish your digital
              <span className="text-xers-purple"> vision</span> into
              <span className="text-xers-green"> reality</span>.
            </AnimatedText>
          </h1>
        </div>
        <div className="flex items-center justify-between mt-8 sm:mt-20">
          <FadeUp>
            <Button to="contact" label="Contact us" />
          </FadeUp>
          <FadeUp>
            <TakeARideButton />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
