import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/multi-sidebar";
import Link from "next/link";
import { CircleHelpIcon } from "@/components/icons/circle-help";
import { GithubIcon } from "@/components/icons/github";

type SupportMenu = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const supportMenus: SupportMenu[] = [
  {
    title: "Support",
    href: "/support",
    icon: <CircleHelpIcon size={20} className="p-0" />,
  },
  {
    title: "Github",
    href: "https://github.com/AbhiArya20/meeting-room",
    icon: <GithubIcon className="p-0" size={20} />,
  },
];

export function SupportMenus() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {supportMenus.map((supportMenu) => (
            <SidebarMenuItem key={supportMenu.title}>
              <SidebarMenuButton asChild size="sm">
                <Link href={supportMenu.href}>
                  {supportMenu.icon}
                  <span>{supportMenu.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
