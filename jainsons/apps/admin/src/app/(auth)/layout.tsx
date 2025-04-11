"use client";
// import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/logo/logo";
import { AuthenticatedProvider } from "@/providers/auth_check_providers/authenticated_provider";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login to jainsons",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthenticatedProvider>
      <div className="w-full h-full flex">
        <main className="w-full h-full flex items-center">
          <Link className="absolute top-10 left-10" href={"/"}>
            <Logo />
          </Link>
          {children}
        </main>
      </div>
    </AuthenticatedProvider>
  );
}
