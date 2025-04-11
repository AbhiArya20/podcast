"use client";
import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface IDropdownMenuItemType {
  label?: string;
  shortcut?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  subItems?: IDropdownMenuItemType[]; // For nested menu items
  separator?: boolean; // To insert a separator before the item
}

interface IDropdownMenuComponentProps {
  trigger?: ReactNode;
  menuItems: IDropdownMenuItemType[];
  menuContentClassName?: string;
}

const DropdownMenuComponent: FC<IDropdownMenuComponentProps> = ({
  trigger,
  menuItems,
  menuContentClassName,
}) => {
  // Recursive function to render menu items
  const renderMenuItems = (items: IDropdownMenuItemType[]) =>
    items.map((item, index) => (
      <div key={index}>
        {item.separator && <DropdownMenuSeparator />}
        {item.subItems ?
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="flex justify-center items-center">
                {item.icon}
              </span>
              <span className="flex justify-center items-center">
                {item.label}
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {renderMenuItems(item.subItems)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        : <DropdownMenuItem
            onClick={item.onClick}
            disabled={item.disabled}
            className="hover:bg-gray-200/60 dark:hover:bg-gray-600/40"
          >
            <span className="flex justify-center items-center">
              {item.icon}
            </span>
            <span className="flex justify-center items-center">
              {item.label}
            </span>
            {item.shortcut && (
              <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        }
      </div>
    ));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || <Button variant="outline">Open</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "bg-foreground z-[999] w-56 border-none shadow-2xl outline-none ring-0",
          menuContentClassName
        )}
      >
        {renderMenuItems(menuItems)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
