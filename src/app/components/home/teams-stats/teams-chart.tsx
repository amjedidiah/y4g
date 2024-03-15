"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { TeamChartProps } from "@/lib/types";

export default function TeamsChart({
  data,
  labels,
  backgroundColor,
  hoverBackgroundColor,
}: TeamChartProps) {
  const canvasRef = useRef<any>(null);

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
      },
    });

    return () => {
      canvasRef.current = null;
    };
  }, [backgroundColor, data, hoverBackgroundColor, labels]);

  return (
    <div className="relative max-lg:order-2 mx-auto w-full max-lg:max-w-[550px] max-[500px]:max-w-[90%] flex flex-col items-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}
