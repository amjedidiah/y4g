"use client";
import useIsOngoing from "@/hooks/use-is-ongoing";

export default function WeAreLive() {
  const isOngoing = useIsOngoing();
  if (!isOngoing) return null;

  return (
    <div className="bg-primary w-full h-full min-[360px]:rounded-2xl flex items-center justify-center px-10 text-dark">
      <div className="flex flex-col text-center p-4">
        <p className="text-lg">WE ARE</p>
        <h4 className="text-5xl lg:text-7xl">live</h4>
      </div>
    </div>
  );
}
