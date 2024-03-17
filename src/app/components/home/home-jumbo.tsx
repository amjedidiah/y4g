import CountdownContainer from "@/components/home/jumbo/countdown-container";
import EventAction from "@/components/shared/event-action";
import { monthInFocus } from "@/lib/constants";

export default function HomeJumbo() {
  return (
    <section className="h-fit lg:h-[85vh] lg:min-h-[575px] lg:max-h-[768px] bg-dark text-slate-200">
      <article className="container h-full grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,475px] gap-20 lg:gap-14 xl:gap-20 items-center pt-6 pb-20 sm:pt-10 sm:pb-24 lg:py-12">
        <div className="flex flex-col gap-1 sm:gap-2 max-lg:items-center max-lg:text-center">
          <div>
            <h5 className="uppercase relative max-sm:top-1 text-lg">
              <span className="text-primary font-bold">{monthInFocus}</span>{" "}
              edition
            </h5>
            <div className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-medium relative lg:-left-2 xl:-left-3">
              <h1 className="sm:leading-[0.85]">
                <span className="text-secondary ms-0 ps-0">My</span>
                <span className="font-extralight"> life</span>
              </h1>
              <h1 className="sm:leading-[0.85]">
                <span className="font-extralight">My </span>
                <span className="text-secondary">Altar</span>
              </h1>
            </div>
          </div>
          <p className="italic text-xl mb-4 md:mb-6">
            God for growth to greatness through generosity...
          </p>
          <EventAction />
        </div>
        <CountdownContainer />
      </article>
    </section>
  );
}
