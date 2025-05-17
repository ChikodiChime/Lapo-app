import React from "react";
import { Header } from "./header";

const Sidebar = React.lazy(() => import("./sidebar").then(m => ({ default: m.Sidebar })));

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-4 md:p-6 bg-[#F8FBFF]">{children}</main>
      </div>
    </div>
  );
}
