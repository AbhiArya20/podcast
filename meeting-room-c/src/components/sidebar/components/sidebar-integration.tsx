import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Check,
  Command,
  Frame,
  GalleryVerticalEnd,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/components/nav-main";
import { NavProjects } from "@/components/sidebar/components/nav-projects";
import { NavUser } from "@/components/sidebar/components/nav-user";
import { WorkspaceSwitcher } from "@/components/sidebar/components/workspace-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/multi-sidebar";
import { SidebarOptInForm } from "./sidebar-opt-in-form";
import { NavSecondary, SupportMenus } from "./support-menus";
import { SearchForm } from "./search-form";
import { cn } from "@/lib/utils";
import { TypographyMuted } from "@/components/typography/typography-muted";
import { TypographySmall } from "@/components/typography/typography-small";
import { MailCheckIcon } from "@/components/icons/mail-check";
import { MessageSquareIcon } from "@/components/icons/message-square";
import { VideoIcon } from "@/components/icons/video";
import NavigationMenus from "@/components/sidebar/components/navigation-menu";
import { SIDEBAR_NAMES } from "@/constants/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
      state: <Check className="size-4 text-lime-600" />,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

const workspaces = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
    bgColor: "bg-red-600/30",
    textColor: "text-red-600",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
    bgColor: "bg-orange-600/30",
    textColor: "text-orange-600",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
    bgColor: "bg-lime-600/30",
    textColor: "text-lime-600",
  },
];

const user = {
  name: "Abhishek",
  email: "aky8507049610@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

export function SidebarIntegration() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      name={SIDEBAR_NAMES.SIDEBAR_INTEGRATION}
      side="right"
    >
      <SidebarHeader>
        <NavUser user={user} />
      </SidebarHeader>
      <SidebarContent className="mt-2 gap-4">
        <NavigationMenus />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SupportMenus />
      </SidebarFooter>
    </Sidebar>
  );
}
