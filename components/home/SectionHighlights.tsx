export default function SectionHighlights() {
  return (
    <section>
      <div className="padding-global flex items-center justify-between my-24 mb-[8.25rem]">
        <img src="/images/home-highlights-shape.svg" alt="" className="w-[12.5rem] aspect-square" />
        <div className="flex items-center">
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
    </section>
  );
}
