import Image from 'next/image';
import Link from 'next/link';

export default function SectionNext() {
  return (
    <section>
      <div className="padding-global">
        <div className="relative inset-0 w-full aspect-[1.6/1] h-screen rounded-2xl overflow-hidden">
          <Image src="/images/project-confie-detail-featured.jpg" alt="Confie" fill={true} />
        </div>

        <div className="flex justify-center relative -translate-y-1/2">
          <Link href="/">
            <div className="bg-black rounded-full p-4 flex items-center gap-[5.3rem] text-white">
              <div className="text-2xl font-medium ml-4 -tracking-[0.03rem]">Next Project</div>
              <div className="w-16 aspect-square rounded-full bg-xers-blue grid place-items-center">
                <div className="w-6 aspect-square">
                  <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 14H26M26 14L14 2M26 14L14 26"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
