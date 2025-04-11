"use client";
import { ISidebarItem } from "./sidebar";
import { AppSliceState } from "@/redux/store";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface SidebarOptionProps {
  sidebarItem: ISidebarItem;
  isOpened: boolean;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  sidebarItem,
  isOpened,
}) => {
  const { isCollapsed, isExpanded } = useSelector(
    (state: AppSliceState) => state.sidebar
  );

  const { icon } = sidebarItem;

  const pathname = usePathname();
  const isActive =
    sidebarItem.activeRoutes.includes(pathname) ||
    sidebarItem.route === pathname;

  return (
    <div
      className={`text-on-foreground/90 w-full flex justify-between items-center h-6 gap-2 ${isActive && "text-primary"}`}
    >
      <span className="flex justify-center items-center">
        {icon ?
          <span
            className={`${isActive && "text-primary dark:text-on-foreground"}`}
          >
            {icon}
          </span>
        : <span className="w-6 h-6 flex justify-center items-center ml-1">
            <span
              className={`transition-all duration-300 ease-in h-[14px] w-[14px] rounded-full flex justify-center items-center ${isActive ? "bg-primary/20" : "bg-transparent"}`}
            >
              <span
                className={`transition-all duration-300 ease-in rounded-full ${isActive ? "bg-primary h-[8px] w-[8px] dark:bg-dark-primary" : "h-[5px] w-[5px] bg-gray-400"}`}
              ></span>
            </span>
          </span>
        }
      </span>

      <span
        className={`grow flex-1 text-[15px] transition-all duration-300 whitespace-nowrap ${isActive && "text-primary dark:text-on-foreground"} ${
          !isCollapsed || isExpanded ?
            "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-2"
        }`}
      >
        {sidebarItem.label}
      </span>

      {sidebarItem?.subItems && (
        <span>
          <FaChevronDown
            className={`${isOpened ? "rotate-0" : "-rotate-90"} transition-all duration-300 ease-out h-3 w-3 font-bold  ${isActive && "text-primary dark:text-on-foreground"}`}
          />
        </span>
      )}
    </div>
  );
};

export default SidebarOption;
