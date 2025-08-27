// app/(site)/page.tsx
import { redirect } from "next/navigation";

export default function SiteIndex() {
  redirect("/profile");
}
