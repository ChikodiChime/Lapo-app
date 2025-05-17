import React from 'react';
import { Button } from "@/components/ui/button";

interface RequestRowProps {
  branch: string;
  type: string;
  quantity: string;
  status: 'Ready' | 'In Progress' | 'Acknowledged' | 'Pending';
}

export function RequestRow({ branch, type, quantity, status }: RequestRowProps) {
  let statusElement;

  switch (status) {
    case "Ready":
      statusElement = (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 border border-green-200 text-green-700">
          Ready
        </span>
      );
      break;
    case "In Progress":
      statusElement = (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FFFAEB] border border-[#FEDF89] text-[#B54708]">
          In Progress
        </span>
      );
      break;
    case "Acknowledged":
      statusElement = (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 border border-blue-200 text-blue-700">
          Acknowledged
        </span>
      );
      break;
    case "Pending":
      statusElement = (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-50 border border-gray-200  text-gray-700">
          Pending
        </span>
      );
      break;
    default:
      statusElement = (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-50 border border-gray-200 text-gray-700">
          {status}
        </span>
      );
  }

  return (
    <tr className="border-b border-[#E2E2E2] text-center text-[10px] text[#475467]">
      <td className="py-2 px-2">{branch}</td>
      <td className="py-2 px-2">{type}</td>
      <td className="py-2 px-2">{quantity}</td>
      <td className="py-2 px-2">{statusElement}</td>
      <td className="py-2 px-2">
        <Button variant="ghost" size="sm" className="text-[#014DAF] text-xs">
          View
        </Button>
      </td>
    </tr>
  );
}
