"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Overline({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <span
      className={classNames(
        "text-on-foreground/90 text-overline tracking-wider uppercase",
        className
      )}
    >
      {text}
    </span>
  );
}
