import React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { BellIcon, DashboardIcon, ProfileIcon, SearchIcon } from "../icons";

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
  userName?: string;
}

export function Header({
  className
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b bg-white px-4 md:px-6",
        className
      )}
    >
      <div className="flex items-center gap-4 text-[#001735]">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

       <DashboardIcon className="w-5 h-5"/>
        <span className="font-medium md:text-base text-sm">Dashboard</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:block relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground shadow-none" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-full pl-8 h-8 shadow-none"
          />
        </div>
        <div className="flex items-center gap-4 text-[#475467]">
          <BellIcon className="w-5 h-5"/>

          <div className="w-8 h-8 bg-[#F2F4F7] border  rounded-full flex items-center justify-center">
            <ProfileIcon className="w-5 h-5"/>
          </div>
          
        </div>
      </div>
    </header>
  );
}
