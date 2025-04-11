"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function Icon({ className }: { className: string }) {
  return (
    <span className="max-w-max max-h-max flex justify-center items-center">
      <i
        className={cn(
          "bx h-[30px] text-on-foreground/70 w-[30px] flex justify-center items-center text-3xl",
          className
        )}
      />
    </span>
  );
}
