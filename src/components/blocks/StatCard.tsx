import React from "react";
import {
  CircleAlert,
  MoveDownLeft,
  MoveUpRight,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconColor: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  range?: string;
  required?: string;
}

export function StatCard({
  title,
  value,
  icon,
  iconColor,
  trend,
  range,
  required,
}: StatCardProps) {
  return (
    <div className="bg-white px-4 pb-4 pt-0 rounded-lg border">
      <div className="">
        <div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center`}
          >
            {icon}
          </div>
          <div className="text-sm text-gray-500 pb-3">{title}</div>
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl font-bold mt-1">{value}</div>
            {trend && (
              <div className="flex items-center gap-2 text-xs text-black/60">
                <div
                  className={`text-xs mt-1 rounded-md flex items-center gap-2 p-1 ${
                    trend.positive
                      ? "text-green-700 bg-green-500/10"
                      : "text-red-900 bg-red-500/10"
                  }`}
                >
                  {trend.positive ? (
                    <MoveUpRight size={12} />
                  ) : (
                    <MoveDownLeft />
                  )}{" "}
                  {trend.value}
                </div>
                <span className="">
                {range}

                </span>
              </div>
            )}
            {required && (
              <div className={`${iconColor} text-xs flex items-center gap-2`}>
                <CircleAlert size={16} />
                <span>{required}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
