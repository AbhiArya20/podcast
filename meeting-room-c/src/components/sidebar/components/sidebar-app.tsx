import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/multi-sidebar";
import { SupportMenus } from "./support-menus";
import NavigationMenus from "@/components/sidebar/components/navigation-menu";
import { SIDEBAR_NAMES } from "@/constants/sidebar";

export function SidebarApp() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      name={SIDEBAR_NAMES.SIDEBAR_APP}
    >
      <SidebarHeader className="mt-2 gap-4">
        <NavigationMenus />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter className="p-0">
        <SupportMenus />
      </SidebarFooter>
    </Sidebar>
  );
}
