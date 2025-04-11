"use client";
import Link from "next/link";
import { FaCircleChevronLeft } from "react-icons/fa6";
import LogoSVG from "../logo/logo_svg";
import Heading1 from "../typography_components/heading_1";

interface SidebarLogoProps {
  isCollapsed: boolean;
  isExpanded: boolean;
  toggleCollapse: () => void;
  toggleSidebar: () => void;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({
  isCollapsed,
  isExpanded,
  toggleCollapse,
  toggleSidebar,
}) => (
  <div className="w-full sticky inset-0 top-0 mt-3">
    <div className="text-primary relative px-8 py-4">
      <Link className="flex items-center gap-2" href="/">
        <LogoSVG />

        <Heading1
          text="Jainsons"
          className={`text-3xl font-bold transition-all duration-300 ${
            !isCollapsed || isExpanded ?
              "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2"
          }`}
        />
      </Link>

      <div
        className={`-translate-y-1/2 bg-background w-9 h-9 absolute right-0 top-1/2 flex justify-center items-center rounded-full transition-all duration-300 translate-x-1/2 cursor-default ${
          isCollapsed && !isExpanded && "hidden"
        }`}
      >
        <span
          className="hidden cursor-pointer lg:inline"
          onClick={toggleCollapse}
        >
          <FaCircleChevronLeft
            color="#696CFF"
            className={`w-[22px]  h-[22px] transition-all duration-300 ease-in-out ${isCollapsed && "rotate-180"}`}
          />
        </span>

        <span
          className="inline cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        >
          <FaCircleChevronLeft
            color="#696CFF"
            className={`w-[22px]  h-[22px] transition-all duration-300 ease-in-out ${isCollapsed && "rotate-180"}`}
          />
        </span>
      </div>
    </div>
  </div>
);

export default SidebarLogo;
