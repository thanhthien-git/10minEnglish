// components/SidebarLayout.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  BookOpen,
  Play,
  User,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";

export type NavItem = {
  key: string;
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

// default nav sets for roles
const DEFAULT_NAVS: Record<string, NavItem[]> = {
  user: [
    { key: "dashboard", label: "Dashboard", href: "/dashboard", Icon: Home },
    { key: "practice", label: "Practice", href: "/practice", Icon: Play },
    { key: "courses", label: "Course", href: "/courses", Icon: BookOpen },
    { key: "profile", label: "Profile", href: "/profile", Icon: User },
  ],
  admin: [
    { key: "dashboard", label: "Dashboard", href: "/dashboard", Icon: Home },
    { key: "courses", label: "Course", href: "/courses", Icon: BookOpen },
    { key: "manage", label: "Manage", href: "/manage", Icon: Shield },
    { key: "settings", label: "Settings", href: "/settings", Icon: Settings },
  ],
};

type Props = {
  children: React.ReactNode;
  // optional: pass custom nav items. If provided, it overrides role.
  navItems?: NavItem[];
  // optional: pick a role to fallback to DEFAULT_NAVS[role]
  role?: "user" | "admin";
  // optional base path prefix (useful if you move group to /site)
  basePath?: string;
};

export default function SidebarLayout({
  children,
  navItems,
  role = "user",
  basePath = "",
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const initial = useMemo<NavItem[]>(
    () => (navItems && navItems.length ? navItems : DEFAULT_NAVS[role] || []),
    [navItems, role]
  );
  const handleLogout = async () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-72 bg-gradient-to-b from-orange-600 to-red-500 text-white rounded-tr-2xl rounded-br-2xl shadow-lg p-6 flex-shrink-0">
        {/* Logo */}
        <div className="mb-6 flex items-center">
          <div className="bg-white/20 p-2 rounded-lg">
            <div className="w-10 h-10 rounded-md bg-white/80 flex items-center justify-center text-red-600 font-bold">
              Q
            </div>
          </div>
          <div className="ml-4 text-lg font-semibold">QuickLangua</div>

          {/* rotate demo button (small) */}
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {initial.map((item) => {
              const href = `${basePath}${item.href}`;
              const active =
                pathname === href || pathname?.startsWith(href + "/");
              const Icon = item.Icon;
              return (
                <li key={item.key}>
                  <Link
                    href={href}
                    className={`group flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition ${
                      active ? "bg-white/20" : ""
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition text-white"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Đăng xuất</span>
          </button>

          <div className="mt-4 flex items-center gap-3 bg-white/6 p-2 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/avatar-placeholder.jpg"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Người dùng</div>
              <div className="text-xs text-white/80">Role: {role}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 sm:p-6 lg:p-10">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="bg-white rounded-2xl shadow p-6 min-h-[60vh] lg:min-h-[80vh]">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed left-4 right-4 bottom-4 z-50 lg:hidden">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl px-3 py-2 flex justify-between items-center">
          {initial.map((item) => {
            const href = `${basePath}${item.href}`;
            const active =
              pathname === href || pathname?.startsWith(href + "/");
            const Icon = item.Icon;
            return (
              <Link
                key={item.key}
                href={href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-2 transition ${
                  active ? "text-orange-500" : "text-gray-600"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    active ? "text-orange-500" : "text-gray-600"
                  }`}
                />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}

          <button
            onClick={handleLogout}
            className="ml-2 p-2 rounded-md text-gray-600 hover:text-red-500"
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}
