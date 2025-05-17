"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface StatusData {
  name: string;
  value: number;
  color: string;
}

interface CardStatusDistributionProps {
  data?: StatusData[];
  totalCards?: number;
}

export default function CardStatusDistribution({
  data = defaultStatusData,
  totalCards = 2450,
}: CardStatusDistributionProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 10, // <-- Rounded donut slices
        cutout: "85%", // <-- Controls inner radius (like ApexCharts donut size)
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            const percent = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value.toLocaleString()} (${percent}%)`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="bg-white">
      <div className="flex justify-center">
        <div className="w-80 h-64 relative">
          <Doughnut data={chartData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-sm text-gray-500">Total Cards</div>
              <div className="text-2xl font-bold">
                {totalCards.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-4 flex-wrap">
        {data.map((status, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: status.color }}
            ></div>
            <span className="text-sm">{status.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const defaultStatusData = [
  { name: "Active", value: 3000, color: "#01A4AF" },
  { name: "Expired", value: 1000, color: "#FFBA24" },
  { name: "Blocked", value: 250, color: "#8020E7" },
  { name: "Lost", value: 100, color: "#EF4444" },
  { name: "Inactive", value: 400, color: "#014DAF" },
];
