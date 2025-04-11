"use client";
import SidebarOption from "./sidebar_option";
import { ISidebarItem } from "./sidebar";
import SidebarItems from "./sidebar_Items";
import { useSelector } from "react-redux";
import { AppSliceState } from "@/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Overline from "../typography_components/overline";

interface SidebarItemProps {
  sidebarItem: ISidebarItem;
}

// TODO: Fix auto close of sidebar items when user navigate to another page.
const SidebarItem: React.FC<SidebarItemProps> = ({ sidebarItem }) => {
  const { isCollapsed, isExpanded } = useSelector(
    (state: AppSliceState) => state.sidebar
  );
  const isCollapsedToSmall = isCollapsed && !isExpanded;

  const [isOpened, setIsOpened] = useState(false);

  const pathname = usePathname();
  const isActive = sidebarItem.activeRoutes.includes(pathname);

  return (
    <>
      {sidebarItem.isSection ?
        <div
          className={`flex ${isCollapsedToSmall ? "justify-center" : "items-center"} transition-all duration-300 gap-3 mt-6 mb-4 text-zinc-300`}
        >
          <span
            className={`w-5 ${isCollapsedToSmall ? "h-[2px]" : "h-[1px]"} transition-all duration-300 bg-gray-300 rounded-lg`}
          ></span>

          <Overline
            className={`text-on-foreground/50 text-overline transition-all duration-300 ${isCollapsedToSmall ? "hidden" : "inline"}`}
            text={sidebarItem.label}
          />
        </div>
      : <li
          key={sidebarItem.label}
          className={`min-h-11 ${
            isCollapsedToSmall ? "w-[84px] max-h-11"
            : isOpened ? "max-h-[180px]"
            : "max-h-11"
          } w-full overflow-hidden transition-all duration-300 ease-out relative`}
        >
          {sidebarItem.route ?
            <Link href={sidebarItem.route} className="w-full">
              <div
                className={`transition-[background-color] flex items-center px-4 py-2 h-full mx-4 overflow-hidden rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-600/40 duration-300 cursor-pointer ${isOpened && !isActive && "bg-gray-200/60"}  ${isActive && "bg-primary-alpha dark:bg-primary hover:bg-primary-alpha dark:hover:dark:bg-primary"}`}
              >
                <SidebarOption sidebarItem={sidebarItem} isOpened={isOpened} />
              </div>
            </Link>
          : <div
              className={`transition-[background-color] flex items-center px-4 py-2 h-full mx-4 overflow-hidden rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-600/40 duration-300 cursor-pointer ${isOpened && !isActive && "bg-gray-200/60 dark:bg-gray-600/40"}  ${isActive && "bg-primary-alpha dark:bg-primary hover:bg-primary-alpha dark:hover:bg-primary"}`}
              onClick={() => setIsOpened(!isOpened)}
            >
              <SidebarOption sidebarItem={sidebarItem} isOpened={isOpened} />
            </div>
          }

          {isActive && sidebarItem?.subItems?.length && (
            <div className="bg-primary w-[4px] h-10 absolute right-0 top-0 rounded-l-3xl"></div>
          )}

          <div className="mt-1 ml-1">
            {sidebarItem?.subItems?.length && (
              <SidebarItems sidebarItems={sidebarItem.subItems} />
            )}
          </div>
        </li>
      }
    </>
  );
};

export default SidebarItem;
