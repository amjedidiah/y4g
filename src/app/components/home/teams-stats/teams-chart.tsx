"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { TeamChartProps } from "@/lib/types";

export default function TeamsChart({
  data,
  labels,
  backgroundColor,
  hoverBackgroundColor,
  onHandleActiveTeamColor,
}: TeamChartProps) {
  const [activeTeamColor, setActiveTeamColor] = useState();
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    if (activeTeamColor) onHandleActiveTeamColor(activeTeamColor);
  }, [activeTeamColor, onHandleActiveTeamColor]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            hoverBackgroundColor,
          },
        ],
      },
      options: {
        normalized: true,
        onClick(_event, elements, _chart) {
          setActiveTeamColor(elements[0]?.element.options.backgroundColor);
        },
      },
    });

    return () => {
      canvasRef.current = null;
    };
  }, [backgroundColor, data, hoverBackgroundColor, labels]);

  return (
    <div className="relative max-lg:order-2 mx-auto w-full max-lg:max-w-[550px] max-[500px]:max-w-[90%] flex flex-col items-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <p className="text-xs mt-2">
        ** Click on your team color to see your team members
      </p>
    </div>
  );
}
