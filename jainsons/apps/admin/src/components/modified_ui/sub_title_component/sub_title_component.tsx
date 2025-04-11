"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ISubTitleComponentProps {
  className?: string;
  subTitle?: string;
}

const SubTitleComponent: FC<ISubTitleComponentProps> = ({
  className,
  subTitle,
}) => {
  return (
    <p
      className={cn(
        "text-on-foreground/70 font-normal dark:text-on-foreground/70",
        className
      )}
    >
      {subTitle}
    </p>
  );
};

export default SubTitleComponent;
