"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function SubTitle1({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <span
      className={classNames(
        "text-on-foreground/70 text-subtitle-1 tracking-[0.009375em]",
        className
      )}
    >
      {text}
    </span>
  );
}
