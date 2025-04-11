"use client";
import Navbar from "@/components/navbar/navbar";
import { SearchDialog } from "@/components/search_dialog/search_dialog";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex">
      <SearchDialog />
      <aside className="min-w-max h-full relative z-20">
        <Sidebar />
      </aside>
      <div className="m-auto w-full max-w-[1500px] h-full overflow-y-auto px-4 scrollbar-none flex flex-col gap-6">
        <header className="w-full sticky top-0 z-10 pt-4 backdrop-blur-lg">
          <Navbar />
        </header>
        <main>{children}</main>
        <br />
        <br />
      </div>
    </div>
  );
}
