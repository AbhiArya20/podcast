"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface IChipProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Chip({ children, className }: IChipProps) {
  return (
    <div
      className={cn(
        "bg-primary-alpha text-[13px] text-primary flex justify-between items-center p-2 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
