"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MaximizeIcon } from "../icons";

interface ChartModalProps {
  title: string;
  children: ReactNode;
}

export function ChartModal({ title, children }: ChartModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[#D0D5DD] hover:text-gray-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
          <MaximizeIcon className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-medium">{title}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
