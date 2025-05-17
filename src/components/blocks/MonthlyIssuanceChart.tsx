"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TooltipItem
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface MonthlyIssuanceData {
  name: string;
  personalized: number;
  instant: number;
}

interface MonthlyIssuanceChartProps {
  data: MonthlyIssuanceData[];
}

export default function MonthlyIssuanceChart({ data }: MonthlyIssuanceChartProps) {
  const labels = data.map((item) => item.name);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Personalized",
        data: data.map((item) => item.personalized),
        backgroundColor: "#014DAF",
        borderRadius: 4,
        stack: "stack1",
        barThickness: 40,
      },
      {
        label: "Instant",
        data: data.map((item) => item.instant),
        backgroundColor: "#CCE2FF",
        borderRadius: 4,
        stack: "stack1",
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
           label: (context: TooltipItem<"bar">) => `${context.raw}%`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize:20,
          color: "#667085",
          font: {
            size: 12,
          },
          callback: function(tickValue: number | string) {
            return `${tickValue}`;
          },
        },
        grid: {
          color: "#F2F4F7",
        },
      },
    },
  };

  return (
    <section className="bg-white">
      <div className="h-80 relative pb-4">
        <Bar data={chartData} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm">Personalized</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#CCE2FF] rounded-full"></div>
          <span className="text-sm">Instant</span>
        </div>
      </div>
    </section>
  );
}
