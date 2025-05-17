import React from 'react';
import { RequestRow } from './RequestRow';

interface RequestData {
  branch: string;
  type: string;
  quantity: string;
  status: 'Ready' | 'In Progress' | 'Acknowledged' | 'Pending';
}

interface RecentRequestsProps {
  requests: RequestData[];
}

export default function RecentRequests({ requests = defaultRequests }: RecentRequestsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead className='bg-[#F1F7FF] border border-[#E2E2E2] text-black/56 font-medium'>
          <tr className="border-b ">
            <th className="text-center py-2 px-2 font-medium">Branch</th>
            <th className="text-center py-2 px-2 font-medium">Card Type</th>
            <th className="text-center py-2 px-2 font-medium">Quantity</th>
            <th className="text-center py-2 px-2 font-medium">Status</th>
            <th className="text-center py-2 px-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <RequestRow
              key={index}
              branch={request.branch}
              type={request.type}
              quantity={request.quantity}
              status={request.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const defaultRequests = [
  {
    branch: "Corporate",
    type: "Instant",
    quantity: "10",
    status: "Ready" as const,
  },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: "10",
    status: "In Progress" as const,
  },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: "10",
    status: "Acknowledged" as const,
  },
  {
    branch: "Corporate",
    type: "Instant",
    quantity: "10",
    status: "Pending" as const,
  },
];
