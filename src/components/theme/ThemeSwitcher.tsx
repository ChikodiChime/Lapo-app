"use client";

import React, { useState } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Palette, Check, X } from "lucide-react";

const themes = [
  { color: "#CCDBEF", name: "Light Blue", textColor: "#333333" },
  { color: "#FFFFFF", name: "White", textColor: "#333333" },
  { color: "#002F6C", name: "Navy Blue", textColor: "#FFFFFF" },
];

export function ThemeSwitcher() {
  const { backgroundColor, setBackgroundColor } = useSidebarStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Theme switcher button */}
      <button
        onClick={toggleOpen}
        className="bg-white border border-gray-300 shadow-lg rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        aria-label="Toggle theme switcher"
      >
        <Palette className="h-5 w-5 text-blue-600" />
      </button>

      {/* Color options */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-5 flex flex-col gap-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          style={{
            width: "100px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex items-center justify-center">
            {/* <p className="text-sm font-medium text-gray-700">Sidebar Theme</p> */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors "
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-rows-3 gap-3">
            {themes.map((theme) => {
              const isActive = backgroundColor === theme.color;
              return (
                <button
                  key={theme.color}
                  onClick={() => {
                    setBackgroundColor(
                      theme.color as "#CCDBEF" | "#FFFFFF" | "#002F6C"
                    );
                  }}
                  className={`relative flex flex-col items-center gap-2 p-2 rounded-lg transition-all hover:scale-105 `}
                  aria-label={`Set theme to ${theme.name}`}
                >
                  <div
                    className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center mx-auto"
                    style={{
                      backgroundColor: theme.color,
                      borderColor:
                        theme.color === "#FFFFFF" ? "#E5E7EB" : theme.color,
                      color: theme.textColor,
                    }}
                  >
                    {isActive && <Check className="h-4 w-4" />}
                  </div>
                  {/* <span className="text-xs font-medium text-gray-700">
                    {theme.name}
                  </span> */}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
