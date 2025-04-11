"use client";
import React, { FC } from "react";
import CircularIcon from "../circular_icon/circular_icon";
import { setIsHidden } from "@/redux/slices/sidebar_slice";
import { useDispatch, useSelector } from "react-redux";
import { AppSliceState } from "@/redux/store";
import ChangeTheme from "../modified_ui/change_theme/change_theme";
import AccountDropDown from "../modified_ui/account_drop_down/account_drop_down";
import { Button } from "../ui/button";
import Caption from "../typography_components/caption";
import { setIsOpen } from "@/redux/slices/search_dialog_slice";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { isHidden } = useSelector((state: AppSliceState) => state.sidebar);
  const toggleSidebar = () => {
    dispatch(setIsHidden(!isHidden));
  };

  const toggleSearchDialog = () => {
    dispatch(setIsOpen(true));
  };

  return (
    <div className="bg-foreground h-16 relative flex justify-between items-center px-4 rounded-md shadow-md">
      <div className="flex items-center gap-1">
        <span className="lg:hidden" onClick={toggleSidebar}>
          <CircularIcon icon="bx-menu" />
        </span>
        <Button
          className="flex justify-center items-center p-0 bg-transparent shadow-none focus:ring-0 focus-within:ring-0 hover:bg-transparent"
          onClick={toggleSearchDialog}
        >
          <CircularIcon icon="bx-search" />
          <Caption
            text="Search"
            className="text-[15px] leading-6 hidden md:inline"
          />
          <Caption
            text="⌘+K"
            className="text-[10px] leading-6 border-2 px-2 border-on-foreground/20 rounded-lg hidden md:inline"
          ></Caption>
        </Button>
      </div>
      <div className="flex gap-1">
        <ChangeTheme />
        <CircularIcon icon="bx-bell" />
        <AccountDropDown />
      </div>
    </div>
  );
};

export default Navbar;
