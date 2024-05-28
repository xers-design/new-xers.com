import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <Link href="/">
      <div className="w-[25rem] grid gap-2">
        <div className="w-full aspect-square overflow-hidden rounded-xl relative">
          <Image src="/images/project-flow.jpg" alt="Flow Music App" fill={true} />
        </div>
        <div className="grid gap-2 px-8 py-6 bg-xers-purple text-white rounded-xl">
          <div className="text-5xl font-medium leading-[1.1] -tracking-[0.12rem]">Flow Music App</div>
          <div className="text-2xl font-normal leading-[1.5]">Myanmar’s top revolutionary music streaming app.</div>
        </div>
      </div>
    </Link>
  );
}
