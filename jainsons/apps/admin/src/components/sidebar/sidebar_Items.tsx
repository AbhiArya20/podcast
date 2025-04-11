"use client";
import { ISidebarItem } from "./sidebar";
import SidebarItem from "./sidebar_item";

interface SidebarItemsProps {
  sidebarItems: ISidebarItem[];
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ sidebarItems }) => (
  <ul className="w-full">
    {sidebarItems.map((sidebarItem) => (
      <SidebarItem key={sidebarItem.label} sidebarItem={sidebarItem} />
    ))}
  </ul>
);

export default SidebarItems;
