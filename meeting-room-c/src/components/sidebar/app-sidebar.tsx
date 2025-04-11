"use client";
import { SidebarApp } from "@/components/sidebar/components/sidebar-app";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/multi-sidebar";
import { NavActions } from "./components/nav-actions";
import { ReactNode } from "react";
import BreadcrumbComponent from "@/components/breadcrumb-component";
import { useLocalStorage } from "react-use";
import { LOCAL_STORAGE_KEY } from "@/constants/local-storage-key";
import { SidebarMenu } from "./components/sidebar-menu";
import { getSidebarNames, SIDEBAR_NAMES } from "@/constants/sidebar";
import { SidebarIntegration } from "./components/sidebar-integration";
import Logo from "../logo/logo";

type SidebarState = {
  open: string[];
};

export default function AppSidebar({ children }: { children: ReactNode }) {
  const [state, set] = useLocalStorage<SidebarState>(
    LOCAL_STORAGE_KEY.SIDEBAR_STATE,
    {
      open: [SIDEBAR_NAMES.SIDEBAR_MENU],
    }
  );

  return (
    <div className="w-full flex overflow-hidden max-h-dvh">
      <SidebarProvider
        sidebarNames={getSidebarNames()}
        defaultOpen={state?.open ?? [SIDEBAR_NAMES.SIDEBAR_MENU]}
        open={state?.open ?? [SIDEBAR_NAMES.SIDEBAR_MENU]}
        onOpenChange={(state) => set({ open: state })}
      >
        <SidebarApp />
        {/* <SidebarMenu /> */}
        <div className="w-full">
          <header className="flex h-16 shrink-0 items-center gap-2 mt-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-sidebar sticky top-0 z-50">
            <div className="flex items-center w-full justify-between gap-2 px-4 ml-4">
              <Logo />
              <NavActions />
            </div>
          </header>
          <SidebarInset className="min-h-[calc(100svh-theme(spacing.20))] h-0 md:m-2 md:ml-2 md:rounded-xl md:shadow">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Separator orientation="vertical" className="h-4 mr-2" />
                <BreadcrumbComponent />
              </div>
              <div className="ml-auto flex items-center px-3">
                <NavActions />
                <Separator orientation="vertical" className="h-4 mx-2" />
                <SidebarTrigger
                  className="-mr-1 ml-auto rotate-180"
                  name={SIDEBAR_NAMES.SIDEBAR_MENU}
                />
              </div>
            </header>
            <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg- muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
            <div className="p-4">{children}</div>
          </SidebarInset>
        </div>
        <SidebarIntegration />
      </SidebarProvider>
    </div>
  );
}
