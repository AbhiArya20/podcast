"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppSliceState } from "@/redux/store";
import { useRouter } from "next/navigation";

export function AuthenticatedProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useSelector((state: AppSliceState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user && user.isEmailVerified && user.isAdmin) {
      console.log("user is verified and admin");
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="w-full h-full">{children}</div>;
}
