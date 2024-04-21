"use client";
import useIsOngoing from "@/hooks/use-is-ongoing";
import { cn } from "@/lib/utils";
import { memo, useMemo } from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  isShort?: boolean;
};

function EventAction({ isShort }: Props) {
  const isOngoing = useIsOngoing();
  const actionText = useMemo(() => {
    if (isShort) return isOngoing ? "Watch" : "Register";
    return isOngoing ? "Watch live event" : "Register to a team";
  }, [isOngoing, isShort]);
  const actionLink = useMemo(
    () =>
      isOngoing
        ? "https://www.facebook.com/crmhgs"
        : "https://forms.gle/TrXCeWSZBZKShyNY9",
    [isOngoing]
  );

  return (
    <a
      href={actionLink}
      target="_blank"
      rel="noopener"
      className={cn("py-3 px-5 shadow-lg", {
        "animate-pulse border-4 border-l-primary  border-t-primary  border-b-secondary  border-r-secondary rounded-xl text-lg md:text-2xl font-semibold uppercase w-fit flex gap-2 lg:gap-10 items-center justify-center lg:justify-between":
          !isShort,
        "bg-secondary rounded-md": isShort,
      })}
    >
      <span>{actionText}</span>
      {!isShort && <BsArrowUpRight />}
    </a>
  );
}

export default memo(EventAction);