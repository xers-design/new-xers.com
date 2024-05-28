import Image from 'next/image';

export default function SectionInformation() {
  return (
    <section>
      <div className="padding-global relative pt-[4.5rem] pb-[11.25rem] flex items-start gap-5">
        <div className="grow">
          <h2 className="relative text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">Confie.ai</h2>
          <div className="grid grid-cols-2 gap-10 mt-16">
            <div className="flex gap-4">
              <div className="relative shrink-0 w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-platform.svg" alt="Platform" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-2xl leading-[1.3] font-medium">Platform</div>
                <div className="text-black text-2xl leading-[1.3] font-medium">Web/ Mobile/ Tablet/ TV/ Watch</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative shrink-0 w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-dev-partner.svg" alt="Dev Partner" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-2xl leading-[1.3] font-medium">Development Partner</div>
                <div className="text-black text-2xl leading-[1.3] font-medium">Confie</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative shrink-0 w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-client.svg" alt="Client" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-2xl leading-[1.3] font-medium">Client</div>
                <div className="text-black text-2xl leading-[1.3] font-medium">Confie.ai</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative shrink-0 w-[5.5rem] aspect-[1.22/1]">
                <Image src="/images/project-detail-market.svg" alt="Market" fill={true} />
              </div>
              <div className="flex flex-col gap-[0.31rem]">
                <div className="text-black opacity-50 text-2xl leading-[1.3] font-medium">Market</div>
                <div className="text-black text-2xl leading-[1.3] font-medium">Global</div>
              </div>
            </div>
          </div>

          <div className="mt-[6.5rem] grid gap-5">
            <div className="text-black opacity-50 text-2xl leading-[1.3] font-medium">Intro</div>
            <div className="text-[2.75rem] font-medium leading-[1.5] -tracking-[0.11rem]">
              Flow stands out as Myanmar's exclusive music streaming platform, boasting the most extensive music library
              ever. The application is designed catering to individuals from diverse demographic backgrounds throughout
              Myanmar.
            </div>
          </div>

          <div className="flex items-center mt-[9.38rem]">
            <div className="grid gap-4">
              <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem]">We’ve helped</div>
              <div className="text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">12</div>
              <div className="text-2xl font-normal leading-[1.1]">Startups</div>
            </div>
            <div className="w-[1px] h-32 bg-black opacity-10 mx-[4.125rem]"></div>
            <div className="grid gap-4">
              <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem]">We’ve Touched</div>
              <div className="text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">53k</div>
              <div className="text-2xl font-normal leading-[1.1]">Users</div>
            </div>
            <div className="w-[1px] h-32 bg-black opacity-10 mx-[4.125rem]"></div>
            <div className="grid gap-4">
              <div className="text-2xl font-medium leading-[1.1] -tracking-[0.06rem]">We’ve mentored</div>
              <div className="text-[5.25rem] font-medium leading-[1.1] -tracking-[0.21rem]">100+</div>
              <div className="text-2xl font-normal leading-[1.1]">Students</div>
            </div>
          </div>
        </div>
        <div className="shrink-0 w-[17.69rem] aspect-[4.56/1] sticky top-[4.5rem] mt-2">
          <Image src="/images/project-detail-devices.svg" alt="Devices" fill={true} />
        </div>
      </div>
    </section>
  );
}
