"use client";

import { UnAuthenticatedProvider } from "@/providers/auth_check_providers/un_authenticated_provider";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Hello admin here is you dashboard",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UnAuthenticatedProvider>
      <div className="w-full h-full">{children}</div>{" "}
    </UnAuthenticatedProvider>
  );
}
