"use client";
import { ReactNode, useEffect, useRef } from "react";
import { RiHomeSmileLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillProduct } from "react-icons/ai";

export interface ISidebarItem {
  label: string;
  route?: string;
  icon?: ReactNode;
  isActive?: boolean;
  isSection?: boolean;
  activeRoutes: string[];
  subItems?: ISidebarItem[];
}

const sidebarItems: ISidebarItem[] = [
  {
    label: "Dashboard",
    route: "/",
    activeRoutes: ["/"],
    icon: <RiHomeSmileLine className="w-[22px] h-[22px]" />,
  },
  {
    label: "Product",
    isActive: true,
    icon: <AiFillProduct className="w-[22px] h-[22px]" />,
    activeRoutes: ["/products", "/products/add", "/products/categories"],
    subItems: [
      {
        label: "List",
        route: "/products",
        isActive: true,
        activeRoutes: [],
      },
      {
        label: "Add Product",
        route: "/products/add",
        activeRoutes: [],
      },
      {
        label: "Category",
        route: "/products/categories",
        activeRoutes: [],
      },
    ],
  },
  {
    label: "Orders",
    route: "/orders",
    activeRoutes: ["/orders"],
    icon: <AiOutlineShoppingCart className="w-[22px] h-[22px]" />,
  },
  {
    label: "Customer",
    route: "/customers",
    activeRoutes: ["/customers"],
    icon: <FaRegUser className="w-[20px] h-[20px]" />,
  },
  {
    label: "Manage Review",
    route: "/reviews",
    activeRoutes: ["/reviews"],
    icon: <RiHomeSmileLine className="w-[22px] h-[22px]" />,
  },
];

import { useDispatch, useSelector } from "react-redux";
import { AppSliceState } from "@/redux/store";
import {
  setIsCollapsed,
  setIsExpanded,
  setIsHidden,
} from "@/redux/slices/sidebar_slice";
import SidebarLogo from "./sidebar_logo";
import SidebarItems from "./sidebar_Items";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isCollapsed, isExpanded, isHidden } = useSelector(
    (state: AppSliceState) => state.sidebar
  );

  const handleMouseEnter = () => {
    if (isCollapsed) {
      dispatch(setIsExpanded(true));
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      dispatch(setIsExpanded(false));
    }
  };

  const toggleCollapse = () => {
    dispatch(setIsCollapsed(!isCollapsed));
  };

  const toggleSidebar = () => {
    dispatch(setIsHidden(!isHidden));
  };

  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as HTMLElement)
      ) {
        dispatch(setIsHidden(true));
      } else {
        dispatch(setIsHidden(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={sidebarRef}
      className={`bg-foreground fixed lg:relative lg:translate-x-0 shadow-md transition-all duration-300 h-full flex flex-col
                ${isHidden ? "-translate-x-[290px]" : "translate-x-0"}
                ${
                  isCollapsed ?
                    isExpanded ? "w-[260px]"
                    : "w-[260px] overflow-hidden lg:w-[84px]"
                  : "w-[260px]"
                }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarLogo
        isCollapsed={isCollapsed}
        isExpanded={isExpanded}
        toggleCollapse={toggleCollapse}
        toggleSidebar={toggleSidebar}
      />
      <div className="scrollbar-w-[5px] pt-1 scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-primary-alpha scrollbar-track-rounded-full scrollbar-track-transparent w-full h-full overflow-y-auto">
        <SidebarItems sidebarItems={sidebarItems} />
      </div>
    </div>
  );
};

export default Sidebar;
