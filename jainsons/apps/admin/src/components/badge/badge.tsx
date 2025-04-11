"use client";
import { cn } from "@/lib/utils";
import classNames from "classnames";
import React, { ReactNode } from "react";

interface IBadgeProps {
  value: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function Badge({ value, children }: IBadgeProps) {
  return (
    <span className="max-w-max max-h-max relative flex justify-center items-center">
      {children}
      <span>
        <span
          className={cn(
            "-right-2 -top-2 bg-primary text-on-foreground w-5 h-5 absolute z-50 flex justify-center items-center text-xs text-center rounded-full",
            classNames
          )}
        >
          {value}
        </span>
      </span>
    </span>
  );
}
