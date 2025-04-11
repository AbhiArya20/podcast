"use client";
import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// export {
//   DropdownMenuPortal,
//   DropdownMenuGroup,
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSub,
//   DropdownMenuSubTrigger,
//   DropdownMenuSubContent,
// };

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/multi-sidebar";
import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography/typography-small";
import { TypographyMuted } from "@/components/typography/typography-muted";

type Workspace = {
  name: string;
  logo: React.ElementType;
  plan: string;
  bgColor: string;
  textColor: string;
};

import { Button } from "@/components/ui/button";
import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function WorkspaceSwitcher({ workspaces }: { workspaces: Workspace[] }) {
  const [activeWorkspace, setActiveWorkspace] = React.useState(0);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <WorkspaceSwitch
                workspace={workspaces[activeWorkspace]}
                icon={<ChevronsUpDown className="ml-auto" />}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-card"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Topic
            </DropdownMenuLabel>
            {workspaces.map((workspace, index) => (
              <DropdownMenuItem
                key={workspace.name}
                onClick={() => setActiveWorkspace(index)}
                className="gap-0 p-0"
              >
                <WorkspaceSwitch
                  workspace={workspace}
                  icon={
                    index === activeWorkspace ? (
                      <Check className="text-lime-500" />
                    ) : null
                  }
                />
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2 cursor-pointer">
              <div className="bg-background size-6 flex justify-center items-center rounded-md border">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add Topic</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

type WorkspaceSwitchProps = {
  workspace: Workspace;
  icon?: React.ReactNode;
};

const WorkspaceSwitch: React.FC<WorkspaceSwitchProps> = ({
  workspace,
  icon,
}) => {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div
        className={cn(
          "bg-sidebar-primary text-sidebar-primary-foreground aspect-square size-8 flex justify-center items-center rounded-lg",
          workspace.bgColor
        )}
      >
        <workspace.logo className={cn("size-4", workspace.textColor)} />
      </div>
      <div
        className={cn(
          "grid flex-1 text-sm leading-tight text-left text-nowrap"
        )}
      >
        <TypographySmall>{workspace.name}</TypographySmall>
        <TypographyMuted className="text-xs truncate">
          {workspace.plan}
        </TypographyMuted>
      </div>
      {icon}
    </SidebarMenuButton>
  );
};
