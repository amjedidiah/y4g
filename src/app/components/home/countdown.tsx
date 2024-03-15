export default function Countdown() {
  return (
    <div className="flex justify-center">
      <div className="h-40 sm:h-44 md:h-52 lg:h-[275px] w-full max-w-[400px] mx-auto relative">
        <div className="bg-primary w-full h-full min-[360px]:rounded-2xl grid grid-cols-2 grid-rows-2 px-10 text-dark">
          <div className="border-r border-dark flex flex-col gap-0 items-end justify-end px-4 py-2 lg:p-4">
            <p>DAYS</p>
            <h4 className="text-5xl lg:text-7xl">50</h4>
          </div>
          <div className="border-b border-dark flex flex-col gap-0 items-start justify-end px-4 py-2 lg:p-4">
            <p>HOURS</p>
            <h4 className="text-5xl lg:text-7xl">50</h4>
          </div>
          <div className="border-t border-dark flex flex-col gap-0 items-end justify-start px-4 py-2 lg:p-4 relative -top-[1px]">
            <p>MINUTES</p>
            <h4 className="text-5xl lg:text-7xl">50</h4>
          </div>
          <div className="border-l border-dark flex flex-col gap-0 items-start justify-start px-4 py-2 lg:p-4 relative -left-[1px]">
            <p>SECONDS</p>
            <h4 className="text-5xl lg:text-7xl">50</h4>
          </div>
        </div>

        <div className="absolute -top-12 lg:-top-[78px] left-0 w-full h-[50px] lg:h-[80px] overflow-hidden">
          <div className="bg-primary w-[650px] h-[316.2278px] rounded-2xl absolute top-[196px] -right-[86px] -rotate-[75deg]" />
        </div>

        <div className="absolute -top-12 lg:-top-[78px] right-0 w-full h-[50px] lg:h-[80px] overflow-hidden">
          <div className="bg-primary w-[650px] h-[316.2278px] rounded-2xl absolute top-[196px] -left-[86px] rotate-[75deg]" />
        </div>

        <div className="absolute -bottom-12 lg:-bottom-[78px] left-0 w-full h-[50px] lg:h-[80px] overflow-hidden">
          <div className="bg-primary w-[650px] h-[316.2278px] rounded-2xl absolute bottom-[196px] -right-[86px] rotate-[75deg]" />
        </div>

        <div className="absolute -bottom-12 lg:-bottom-[78px] right-0 w-full h-[50px] lg:h-[80px] overflow-hidden">
          <div className="bg-primary w-[650px] h-[316.2278px] rounded-2xl absolute bottom-[196px] -left-[86px] -rotate-[75deg]" />
        </div>
      </div>
    </div>
  );
}
