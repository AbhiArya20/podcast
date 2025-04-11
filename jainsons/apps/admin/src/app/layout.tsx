"use client";
// import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import AppProviders from "@/providers/providers";
import "boxicons/css/boxicons.min.css";
import { useLoadingWithRefresh } from "@/hooks/useRefreshHook";
import SplashPage from "@/components/splash_page/splash_page";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Jainsons",
//   description: "Welcome to jainsons",
// };

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading } = useLoadingWithRefresh();
  return (
    <div className="bg-background w-screen h-screen overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-[5px] scrollbar-thumb-rounded-full scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/50 scrollbar-track-rounded-full scrollbar-track-transparent">
      {loading ?
        <SplashPage />
      : children}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        <AppProviders>
          <App>{children}</App>
        </AppProviders>
      </body>
    </html>
  );
}
