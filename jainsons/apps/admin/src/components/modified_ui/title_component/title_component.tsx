"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ISubTitleComponentProps {
  className?: string;
  title?: string;
}

const TitleComponent: FC<ISubTitleComponentProps> = ({ className, title }) => {
  return (
    <h5
      className={cn(
        "text-on-foreground/70 mb-1 text-lg font-medium tracking-tight leading-none dark:text-on-foreground/70",
        className
      )}
    >
      {title}
    </h5>
  );
};

export default TitleComponent;
