// app/(site)/layout.tsx
import SidebarLayout from "@/components/side-bar-layout";
import type { ReactNode } from "react";

export const metadata = { title: "Site" };

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SidebarLayout basePath="" role="user">{children}</SidebarLayout>;
}
