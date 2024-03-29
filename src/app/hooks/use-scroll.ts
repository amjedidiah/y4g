import { useEffect } from "react";

export default function useScroll(handleScroll: () => void, onInit = false) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (onInit) handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, onInit]);
}
