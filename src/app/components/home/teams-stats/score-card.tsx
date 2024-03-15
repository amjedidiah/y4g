import { TeamId } from "@/lib/constants";
import { Y4GBadge } from "@/lib/icons";
import { Team } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = Team & {
  scoresStack: Set<number>;
};

export default function Scorecard({ members, scoresStack, id, name }: Props) {
  const score = members.length;
  scoresStack.add(score);
  const scoresStackArray = [...scoresStack];

  const position = scoresStackArray.indexOf(score) + 1;

  return (
    <div
      key={id}
      className={cn(
        {
          "bg-black text-slate-200": id === TeamId.team1,
          "bg-primary text-slate-200": id === TeamId.team2,
          "bg-secondary text-slate-200": id === TeamId.team3,
          "bg-ash text-dark": id === TeamId.team4,
          "shadow-lg max-sm:scale-y-110 sm:scale-105":
            Math.max(...scoresStackArray) === score,
        },
        `flex gap-4 px-6 py-2 rounded-lg items-end text-center`
      )}
    >
      <div
        className={cn("p-3 relative [&_svg]:scale-[200%] ", {
          "[&_rect:nth-child(1)]:fill-dark [&_rect:nth-child(2)]:stroke-dark":
            id === TeamId.team4,
          "[&_rect:nth-child(1)]:fill-slate-200 [&_rect:nth-child(2)]:stroke-slate-200":
            id !== TeamId.team4,
        })}
      >
        <div className="absolute left-1 -top-1">
          <Y4GBadge />
        </div>
        <div
          className={cn(
            "absolute -top-[9.5px] left-0 w-full h-full flex items justify-center font-medium text-lg",
            {
              "text-black": id === TeamId.team1,
              "text-primary": id === TeamId.team2,
              "text-secondary": id === TeamId.team3,
              "text-ash": id === TeamId.team4,
            }
          )}
        >
          {position}
        </div>
      </div>
      <p className="flex-1 text-start text-2xl uppercase">{name}</p>
      <h5 className="px-3 text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
        {members.length}
      </h5>
    </div>
  );
}
