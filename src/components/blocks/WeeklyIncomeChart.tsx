'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TooltipItem,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

interface WeeklyIncomeData {
  name: string;
  value: number;
}

interface WeeklyIncomeChartProps {
  data: WeeklyIncomeData[];
}

export default function WeeklyIncomeChart({ data }: WeeklyIncomeChartProps) {
  const labels = data.map((item) => item.name);
  const values = data.map((item) => item.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: values,
        borderColor: '#4DAF01',
        backgroundColor: 'rgba(77, 175, 1, 0.1)',
        tension: 0.4, // smooth curve
        // fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 2,
        
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            return `${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          color: '#667085',
          stepSize: 20,
          font: {
            size: 12,
          },
         callback: function(tickValue: number | string) {
            return `${tickValue}`;
          },
        },
        
      },
    },
  };

  return (
    <section className="bg-white p-3">
      <div className="h-80 relative">
        <Line data={chartData} options={chartOptions} />
      </div>
    </section>
  );
}
