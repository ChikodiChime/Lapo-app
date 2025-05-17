"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { AccountIcon, AuthorizationListIcon, AuthorizationQueueIcon, BranchIcon, CardCheckIcon, CardProfileIcon, CardSchemeIcon, CardsIcon, DashboardIcon, LogoutIcon, RolesIcon, StockIcon, TrailIcon, UsersIcon } from "../icons";

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon, label, active }: SidebarItemProps) => {
  const { backgroundColor } = useSidebarStore();

  // Determine text colors based on background color
  let textColor = "text-[#808080]";
  let hoverBgColor = "hover:bg-accent/10";
  let activeBgColor = "bg-accent/20";
  let activeTextColor = "text-primary font-medium";

  if (backgroundColor === "#002F6C") {
    textColor = "text-white/70";
    hoverBgColor = "hover:bg-white/10";
    activeBgColor = "bg-white/20";
    activeTextColor = "text-white font-medium";
  } else if (backgroundColor === "#CCDBEF") {
    textColor = "text-black/70";
    hoverBgColor = "hover:bg-black/5";
    activeBgColor = "bg-black/10";
    activeTextColor = "text-black font-medium";
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
        active
          ? `${activeBgColor} ${activeTextColor}`
          : `${textColor} ${hoverBgColor}`
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar({ className }: SidebarProps) {
  const { backgroundColor } = useSidebarStore();

  // Determine text color based on background color
  let textColorClass = "text-[#808080]";

  if (backgroundColor === "#002F6C") {
    textColorClass = "text-white";
  } else if (backgroundColor === "#CCDBEF") {
    textColorClass = "text-black";
  }

  return (
    <div
      className={cn("flex flex-col h-full border-r", className, textColorClass)}
      style={{ backgroundColor }}
    >
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LAPO" height={150} width={150} />
        </Link>
      </div>

      <div className="px-3 py-2">
        <nav className="space-y-1">
          <SidebarItem
            href="/dashboard"
            icon={<DashboardIcon className="w-5 h-5" />}
            label="Dashboard"
            active
          />

          <p className="text-xs font-medium text-muted-foreground px-5 py-3">
            MAIN MENU
          </p>
          <SidebarItem
            href="/"
            icon={<BranchIcon className="w-5 h-5" />}
            label="Branches"
          />
          <SidebarItem
            href="/"
            icon={<RolesIcon className="w-5 h-5" />}
            label="Roles"
          />
          <SidebarItem href="/" icon={<UsersIcon className="w-5 h-5" />} label="Users" />
          <SidebarItem
            href="/"
            icon={<CardSchemeIcon className="w-5 h-5" />}
            label="Card Scheme"
          />
          <SidebarItem
            href="/"
            icon={<CardProfileIcon className="w-5 h-5" />}
            label="Card Profile"
          />
          <SidebarItem
            href="/"
            icon={<CardCheckIcon className="w-5 h-5" />}
            label="Card Request"
          />
          <SidebarItem href="/" icon={<StockIcon className="w-5 h-5" />} label="Stock" />
          <SidebarItem href="/" icon={<CardsIcon className="w-5 h-5" />} label="Cards" />
          <SidebarItem
            href="/"
            icon={<AuthorizationListIcon className="w-5 h-5" />}
            label="Authorization List"
          />
          <SidebarItem
            href="/"
            icon={<AuthorizationQueueIcon className="w-5 h-5" />}
            label="Authorization Queue"
          />
          <SidebarItem href="/" icon={<TrailIcon className="w-5 h-5" />} label="Trail" />
          <SidebarItem href="/" icon={<AccountIcon className="w-5 h-5" />} label="Account" />
        </nav>
      </div>

      <div className="mt-auto p-4">
        <button className="flex items-center gap-2 text-sm text-black hover:text-foreground">
          <LogoutIcon className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs text-gray-500">POWERED BY</p>
        <Image src="/cardinfra.svg" alt="LAPO" height={42} width={95} className="w-2/3"/>
      </div>
    </div>
  );
}
