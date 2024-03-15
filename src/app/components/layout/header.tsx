"use client";
import useStickyHeader from "@/hooks/use-sticky-header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const isStickyHeader = useStickyHeader(60);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full py-5 lg:py-8 text-slate-200 uppercase font-montserrat bg-dark z-10",
        {
          "shadow-lg bg-black border-b-2 border-slate-200": isStickyHeader,
        }
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text text-3xl inline-flex items-center">
          <span className="text-primary">Y</span>
          <span className="text-secondary text-[40px] spacing font-semibold relative -left-2">
            4
          </span>
          <span className="text-primary relative -left-[11px]">G</span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8 font-semibold">
          <ul>
            <li className="cursor-pointer">
              <ScrollLink to="teamStats" activeClass="text-secondary" smooth>
                Team Stats
              </ScrollLink>
            </li>
          </ul>
          <a
            href="https://forms.gle/TrXCeWSZBZKShyNY9"
            target="_blank"
            rel="noopener"
            className="bg-secondary py-3 px-5 rounded-md shadow-lg"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
