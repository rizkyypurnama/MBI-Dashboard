import { Bell, MessageSquare, LayoutDashboard, Menu } from "lucide-react";
import { useState } from "react";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between h-[72px] px-4 border-b shadow-sm bg-white">
      {/* Left: Sidebar toggle (mobile only) */}
      <div className="flex items-center gap-2 md:hidden">
        <button onClick={onToggleSidebar}>
          <Menu size={22} className="text-gray-600" />
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 px-2 sm:px-4 md:px-6">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5 sm:px-4 sm:py-2">
          <input
            type="text"
            placeholder="Поиск по разделу ..."
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <img src="/assets/slider.png" size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Right: Icons + Language + User */}
      <div className="flex items-center gap-4 sm:gap-5 md:gap-7">
        {/* Language Button (hidden on mobile) */}
        <button className="bg-gray-100 text-sm sm:text-base px-2 py-1 rounded-md hidden sm:block">
          RU
        </button>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-3 text-gray-600 pr-1 sm:pr-2">
          <img src="/assets/list.png" size={22} className="sm:size-[25px]" />
          <img src="/assets/message.png" size={22} className="sm:size-[25px]" />
            <img src="/assets/bell.png" size={22} className="sm:size-[25px]" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-4 sm:pl-6 md:pl-8 border-l border-gray-200 h-[72px] px-2 sm:px-4 md:px-8">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="hidden md:block leading-tight pl-2 sm:pl-4">
            <div className="text-sm sm:text-base text-black">Alex Sanbaev</div>
            <div className="text-xs text-gray-500">Finance strategy</div>
          </div>
        </div>
      </div>
    </header>
  );
}
