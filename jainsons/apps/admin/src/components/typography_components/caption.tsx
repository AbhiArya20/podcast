"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Caption({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <span
      className={classNames(
        "text-caption text-on-foreground/40 -tracking-tight",
        className
      )}
    >
      {text}
    </span>
  );
}
