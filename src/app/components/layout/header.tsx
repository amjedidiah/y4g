"use client";
import useStickyHeader from "@/hooks/use-sticky-header";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
import EventAction from "@/components/shared/event-action";

const HEADER_HEIGHT_OFFSET = -90;

export default function Header() {
  const isStickyHeader = useStickyHeader(60);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full py-5 text-slate-200 uppercase font-montserrat bg-dark z-10",
        {
          "shadow-xl bg-black border-b-2 border-slate-200": isStickyHeader,
        }
      )}
    >
      <div className="container flex items-center justify-between">
        <ScrollLink
          to="top"
          className="text text-3xl inline-flex items-center cursor-pointer"
          smooth
          offset={HEADER_HEIGHT_OFFSET}
          duration={500}
        >
          <span className="text-primary">Y</span>
          <span className="text-secondary text-[40px] spacing font-semibold relative -left-2">
            4
          </span>
          <span className="text-primary relative -left-[11px]">G</span>
        </ScrollLink>
        <nav className="flex items-center gap-5 sm:gap-8 font-semibold">
          <ul>
            <li className="cursor-pointer">
              <ScrollLink
                to="teams"
                activeClass="text-secondary"
                smooth
                offset={HEADER_HEIGHT_OFFSET}
                duration={500}
              >
                Teams
              </ScrollLink>
            </li>
          </ul>
          <EventAction isShort />
        </nav>
      </div>
    </header>
  );
}
