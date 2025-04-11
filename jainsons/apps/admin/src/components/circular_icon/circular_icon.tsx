"use client";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import Icon from "../icons/icon";

interface ICircularIcon {
  icon: ReactNode;
  className?: string;
}

const CircularIcon: FC<ICircularIcon> = ({ icon, className }) => {
  return (
    <span
      className={cn(
        "text-on-foreground w-10 h-10 flex justify-center items-center rounded-full transition-colors duration-300 cursor-pointer dark:hover:bg-gray-600/40 hover:bg-gray-200/60",
        className
      )}
    >
      <Icon className={cn("text-on-foreground/90 w-6 h-6 text-2xl", icon)} />
    </span>
  );
};

export default CircularIcon;
