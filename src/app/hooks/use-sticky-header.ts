import { useCallback, useState } from "react";
import useScroll from "@/hooks/use-scroll";

export default function useStickyHeader(mainDistanceTop = -50) {
  // When header gets to the top of the screen, make it sticky
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Callback to handle scroll event
  const handleScroll = useCallback(() => {
    // Get scroll position of header
    const main = [...document.getElementsByTagName("main")][0];
    if (!main) return;

    const mainPosition = main.getBoundingClientRect().top;

    // If header is at the top of the screen, make it sticky
    setIsHeaderSticky(mainPosition <= mainDistanceTop);
  }, [mainDistanceTop]);

  // Attach scroll listener using custom hook
  useScroll(handleScroll, true);

  return isHeaderSticky;
}
