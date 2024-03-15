import Countdown from "@/components/home/jumbo/countdown";
import WeAreLive from "@/components/home/jumbo/we-are-live";

type TimerObject =
  | {
      days: number;
      hours: string;
      minutes: string;
      seconds: string;
    }
  | undefined;

export default function CountdownContainer() {
  return (
    <div className="flex justify-center uppercase">
      <div className="h-40 sm:h-44 md:h-52 lg:h-[275px] w-full max-w-[400px] mx-auto relative">
        <WeAreLive />
        <Countdown />

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
