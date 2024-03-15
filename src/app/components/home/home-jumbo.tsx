import { BsArrowUpRight } from "react-icons/bs";
import Countdown from "@/components/home/countdown";

export default function HomeJumbo() {
  return (
    <section className="h-fit lg:h-[85vh] lg:max-h-[768px] bg-dark text-slate-200">
      <article className="container h-full grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,475px] gap-20 lg:gap-14 xl:gap-20 items-center pt-6 pb-20 sm:pt-10 sm:pb-24 lg:py-12">
        <div className="flex flex-col gap-1 sm:gap-2 max-lg:items-center max-lg:text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-medium relative sm:-left-4">
            <h1>
              <span className="text-primary ms-0 ps-0">My</span>
              <span className="font-extralight"> life</span>
            </h1>
            <h1>
              <span className="font-extralight">My </span>
              <span className="text-secondary">Altar</span>
            </h1>
          </div>
          <p className="italic text-xl mb-4 md:mb-6">
            God for growth to greatness through generosity...
          </p>
          <a
            href="https://forms.gle/TrXCeWSZBZKShyNY9"
            target="_blank"
            rel="noopener"
            className="animate-pulse border-4 border-l-primary  border-t-primary  border-b-secondary  border-r-secondary rounded-xl text-lg md:text-2xl font-semibold py-3 px-5 uppercase w-fit flex gap-2 lg:gap-10 items-center justify-center lg:justify-between"
          >
            <span>Register to attend</span>
            <BsArrowUpRight />
          </a>
        </div>
        <Countdown />
      </article>
    </section>
  );
}
